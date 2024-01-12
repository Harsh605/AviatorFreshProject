// Import necessary modules
import { Server } from "socket.io";

export const initSocketController = (server) => {
  let gameStartedTime = new Date("2050-03-21").getTime();
  console.log("🚀 ~ initSocketController ~ gameStartedTime:", gameStartedTime);
  const io = new Server(server, {
    cors: {
      origin: process.env.client, // Replace with your client's origin
      methods: ["GET", "POST"],
    },
  });
  // Store user socket associations
  const userSocketMap = new Map();
  const connectedUsers = new Set();

  io.on("connection", (socket) => {
    console.log("A user connected");
    console.log(socket.id);

    socket.on("userid", (userId) => {
      // Associate the socket.id with the user ID
      if (userId) {
        userSocketMap.set(userId, socket.id);
        // Add user to the set of connected users
        connectedUsers.add(userId);
        // Add the user to a global room (group)
        socket.join("aviatorRoom");
      }
      // Broadcast a message to the global room
      io.to("aviatorRoom").emit("userConnected", { userId });
      io.to("aviatorRoom").emit("gameStartedTime", { gameStartedTime });
      // Log all connected user IDs
      console.log("Connected Users:", Array.from(connectedUsers));

      // Log the new socket ID associated with the user

      console.log(userSocketMap);
    });
    socket.on("crashedPlane", (data) => {
      let gameStartedTime = 10000 + Date.now();
      setTimeout(() => {
        console.log(gameStartedTime, Date.now()); // Now you'll see a difference
      }, 0);
      io.to("aviatorRoom").emit("gameStartedTime", { gameStartedTime });
    });
    socket.on("disconnect", () => {
      console.log("User disconnected");
      console.log(socket.id);
      // Remove the mapping on user disconnect
      // Find and remove the user ID from the map
      for (const [key, value] of userSocketMap) {
        if (value === socket.id) {
          userSocketMap.delete(key);
          break;
        }
      }
      // Remove the user from the set based on the socket ID
      connectedUsers.delete(socket.id);

      // Log all remaining connected user IDs
      console.log("Connected Users:", Array.from(connectedUsers));
      console.log(userSocketMap);
      // Broadcast a message to the global room on user disconnect
      io.to("aviatorRoom").emit("userDisconnected", { userId: socket.id });
    });
  });
};
