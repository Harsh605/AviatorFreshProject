// library imoprts
import express from "express";
import morgan from "morgan";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import "dotenv/config";
import cors from "cors";
import { initSocketController } from "./controllers/socketController.js";
const Port = process.env.PORT || 5000;
// code imports
import { router as authRouter } from "./routes/authRouter.js";
import { router as userRouter } from "./routes/userRouter.js";
import { router as aviatorRouter } from "./routes/aviatorRouter.js";
import { router as adminRouter } from "./routes/adminRouter.js";

const app = express();
app.use(cors());
// use body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const server = createServer(app);
// Initialize the Socket.IO controller
initSocketController(server);
//=============serving first file...=========

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "/index.html"));
});

//  use of routing
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/bet", aviatorRouter);
app.use("/admin", adminRouter);
// listening to the server
server.listen(Port, () => {
  console.log(`server running at http://localhost:${Port}`);
});
