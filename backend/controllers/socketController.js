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
  io.on("connection", async (socket) => {
    const clientId = socket.handshake.query.clientId || "0000000000";
    if (clientId != "0000000000" && clientId) {
      connectedUsers.add(clientId);
    }
    socket.join(clientId);
    console.log("connected", connectedUsers);
    const connectedArray = Array.from(connectedUsers);
    socket.on("betPlaced", (betCount) => {
      count = count + betCount;
    });
    socket.on("withdrawCount", (withdrawCount) => {
      count = count > 0 ? count - withdrawCount : 0;
    });
    // =========== crashedPlaneNumber ==========
    async function crashedPlaneNumber(count) {
      if (clientId === connectedArray[0]) {
        if (count === 0) {
          crashedValue = await generatePlaneCrashed(0);
          io.to("aviatorRoom").emit("crashedValue", crashedValue);
          console.log("No User Crashed Value", crashedValue);
        }
        if (count === 1) {
          crashedValue = await generatePlaneCrashed(1);
          io.to("aviatorRoom").emit("crashedValue", crashedValue);
          console.log("SingleUser Crashed Value", crashedValue);
        }
        if (crashedValue) {
          startInterval(1.0, crashedValue);
        }
      }
    }
    intervalId = setInterval(() => {
      crashedPlaneNumber(count);
    }, 10000);
    // ======= StartPlaneCode ========
    function startInterval(initialValue, crashedValue) {
      io.to("aviatorRoom").emit("gameStarted", true);
      console.log("=== startInterval ===");
      const startIntervalId = setInterval(() => {
        console.log(crashedValue);
        if (initialValue <= crashedValue) {
          console.log(initialValue);
          initialValue = (parseFloat(initialValue) + 0.01).toFixed(2);
          io.to("aviatorRoom").emit("planeCounter", initialValue);
        } else {
          io.to("aviatorRoom").emit("planeCounter", 0);
          io.to("aviatorRoom").emit("gameStarted", false);
          // clea
          setTimeout(() => {
            crashedPlaneNumber(count);
          }, 15000);
          clearInterval(startIntervalId);
          return;
        }
      }, 100); // Run the interval every 100 milliseconds
    }

    if (clientId === connectedArray[0]) {
      socket.on("startPlane", (data) => {
        startInterval(1.0);
      });
    }

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
export async function generatePlaneCrashed(
  length,
  withdrawalmoney,
  totalbetmoney
) {
  const planeSettings = await prisma.crashedplane.findFirst({
    where: {
      id: 1,
    },
  });

  const { nl, nh, sl, sh, sp, sm, ml, mh, mr, da } = planeSettings;
  if (length == 0) {
    return generateRandomNumber(Number(nl), Number(nh));
  } else if (length === 1) {
    const currentValue = generateRandomNumber(Number(sl), Number(sh));
    if (currentValuesArray.length >= 10) {
      currentValuesArray = [];
    } else {
      currentValuesArray.push(currentValue);
    }
    return updateSingleValues(
      Number(sp),
      Number(sm),
      Number(sl),
      currentValuesArray,
      currentValue
    );
  } else if (length > 1) {
    const currentValue = generateRandomNumber(Number(ml), Number(mh));
  }
}
