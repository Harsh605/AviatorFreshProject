// Import necessary modules
import { Server } from "socket.io";
import prisma from "../prisma/prisma.js";
import {
  generateRandomNumber,
  updateSingleValues,
} from "../utils/randomGenerate.js";
export const initSocketController = async (server) => {
  const io = new Server(server, {
    cors: {
      origin: [process.env.client, process.env.adminClient],
      methods: ["GET", "POST"],
    },
  });
  // Store user socket associations
  var userSocketMap = new Map();
  var connectedUsers = new Set();
  var crashedValue;
  var count = 0;
  var intervalId = null;
  crashedPlaneNumber(count);
  var clientId;
  var connectedArray = [];
  // =========== crashedPlaneNumber ==========
  async function crashedPlaneNumber(count) {
    console.log(count);
    if (count === 0) {
      console.log(count);
      crashedValue = await generatePlaneCrashed(0);
      io.to("aviatorRoom").emit("crashedValue", crashedValue);
      console.log("No User Crashed Value", crashedValue);
    }
    if (count === 1) {
      console.log(count);
      crashedValue = await generatePlaneCrashed(1);
      io.to("aviatorRoom").emit("crashedValue", crashedValue);
      console.log("SingleUser Crashed Value", crashedValue);
    }
    if (count > 1) {
      io.to("aviatorRoom").emit("gameStarted", true);
      console.log("=== startInterval ===");
      const startIntervalId = setInterval(async () => {
        crashedValue = 1;
        initialValue = (parseFloat(initialValue) + 0.01).toFixed(2);
        io.to("aviatorRoom").emit("planeCounter", initialValue);
        const getTotalAmount = await getTotalBetAmount();
        const crashedPlaneSettings = await prisma.crashedplane.findFirst({
          where: {
            id: 1,
          },
        });
        if (!crashedPlaneSettings) {
          crashedPlaneNumber(count);
        }
        const { ml, mh, mr, da } = crashedPlaneSettings;
        ml = Number(ml);
        mh = Number(mh);
        mr = Number(mr);
        da = Number(da);
        const distributedAmount = Math.round(
          (getTotalAmount * (100 - (da + 20))) / 100
        );
        const totalWithDrawAmount = await getWithdrawAmount();
        if (distributedAmount < totalWithDrawAmount) {
          crashedValue = 0;
        }
        if (!crashedValue) {
          io.to("aviatorRoom").emit("planeCounter", 0);
          io.to("aviatorRoom").emit("gameStarted", false);
          setTimeout(() => crashedPlaneNumber(count), 20000);
          clearInterval(startIntervalId);
        }
      }, 100);
    }
    if (crashedValue && count <= 1) {
      startInterval(1.0);
    }
  }

  // ======= StartPlaneCode ========
  function startInterval(initialValue) {
    io.to("aviatorRoom").emit("gameStarted", true);
    console.log("=== startInterval ===");
    const startIntervalId = setInterval(() => {
      if (initialValue <= crashedValue) {
        console.log(initialValue);
        initialValue = (parseFloat(initialValue) + 0.01).toFixed(2);
        io.to("aviatorRoom").emit("planeCounter", initialValue);
        io.to("aviatorRoom").emit("gameStarted", true);
      } else {
        io.to("aviatorRoom").emit("planeCounter", 0);
        io.to("aviatorRoom").emit("gameStarted", false);
        crashedValue = 0;
        clearInterval(intervalId);
        setTimeout(() => crashedPlaneNumber(count), 20000);
        clearInterval(startIntervalId);
      }
    }, 100); // Run the interval every 100 milliseconds
  }

  io.on("connection", async (socket) => {
    clientId = socket.handshake.query.clientId || "0000000000";
    if (clientId != "0000000000" && clientId) {
      connectedUsers.add(clientId);
    }
    socket.join(clientId);
    socket.join("aviatorRoom");
    console.log("connected", connectedUsers);
    connectedArray = Array.from(connectedUsers);
    socket.on("betPlaced", (betCount) => {
      count = count + betCount;
      console.log("🚀 ~ socket.on ~ count:", count);
    });
    socket.on("withdrawCount", (withdrawCount) => {
      count = count > 0 ? count - withdrawCount : 0;
    });

    console.log("===== connection code =====");
    socket.on("listenCrashedPlane", async () => {
      const crashedNumber = await generatePlaneCrashed(1);
      io.emit("adminPlaneCrashedNumber", crashedNumber);
    });

    //game logic
    socket.on("crashedPlane", () => {
      let gameStartedTime = 10000 + Date.now();
      setTimeout(() => {
        console.log(gameStartedTime, Date.now()); // Now you'll see a difference
      }, 0);
      io.to("aviatorRoom").emit("gameStartedTime", gameStartedTime);
    });

    socket.on("crashedTime", (time) => {
      console.log(time);
      io.to("aviatorRoom").emit("adminPlaneCrashedTime", time);
    });
    if (clientId === connectedArray[0]) {
      socket.on("newBetTime", async (time) => {
        console.log(time);
        await prisma.betTime.update({
          where: {
            id: 1,
          },
          data: {
            time: String(time),
          },
        });
      });
    }
    socket.on("disconnect", () => {
      console.log("===== User disconnected ======");
      // Remove the mapping on user disconnect
      // Find and remove the user ID from the map
      for (const [key, value] of userSocketMap) {
        if (value === socket.id) {
          userSocketMap.delete(key);
          break;
        }
      }
      // Remove the user from the set based on the socket ID
      connectedUsers.delete(socket.handshake.query.clientId);
      console.log("🚀disconnected", connectedUsers);
    });
  });
};

/// plane number generate logics...
var currentValuesArray = [];
export async function generatePlaneCrashed(length) {
  const planeSettings = await prisma.crashedplane.findFirst({
    where: {
      id: 1,
    },
  });

  const { nl, nh, sl, sh, sp, sm } = planeSettings;
  if (length == 0) {
    return generateRandomNumber(Number(nl), Number(nh));
  } else if (length === 1) {
    return updateSingleValues(Number(sp), Number(sm), Number(sh), Number(sl));
  }
}

// getTotalBetAmount for 15seconds....
const getTotalBetAmount = async () => {
  try {
    const settings = await prisma.betTime.findFirst({
      where: {
        id: 1,
      },
    });
    const twentySecondsAgo = new Date();
    twentySecondsAgo.setSeconds(twentySecondsAgo.getSeconds() - 20);

    const betData = await prisma.aviator.findMany({
      where: {
        betTime: {
          gte: twentySecondsAgo.toISOString(), // Greater than or equal to one minute ago
        },
      },
    });
    // Delete records outside the last 20 seconds
    await prisma.aviator.deleteMany({
      where: {
        betTime: {
          lt: twentySecondsAgo.toISOString(), // Less than 20 seconds ago
        },
      },
    });
    const betTimesInMilliseconds = betData.map((item) => ({
      ...item,
      betTime: Number(new Date(item.betTime).getTime()), // Convert betTime to milliseconds
    }));
    const lowertime = Number(settings.time);
    const uppertime = lowertime + 20000;
    const filteredBetData = betTimesInMilliseconds.filter((item) => {
      const betTimeInMilliseconds = item.betTime;
      return (
        betTimeInMilliseconds > lowertime && betTimeInMilliseconds < uppertime
      );
    });
    const sumOfAmount = filteredBetData.reduce(
      (sum, item) => sum + item.betAmount,
      0
    );
    return sumOfAmount;
  } catch (err) {
    return err.message;
  }
};
//get withdrawAmmount ....
const getWithdrawAmount = async () => {
  try {
    const betData = await prisma.aviator.findMany({
      where: {
        withdrawAmount: {
          not: 0,
        },
      },
    });
    const sumOfAmount = betData.reduce(
      (sum, item) => sum + item.withdrawAmount,
      0
    );
    return sumOfAmount;
  } catch (err) {
    return err.message;
  }
};
