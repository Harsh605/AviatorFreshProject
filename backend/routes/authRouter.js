import { Router } from "express";
import {
  register,
  login,
  verifyCode,
  verifyCodePass,
  forGotPassword,
} from "../controllers/authController.js";

const router = Router();

// ==== routes setup =====

router
  .post("/register", register)
  .post("/login", login)
  .post("/otp/verify", verifyCode)
  .post("/resetPassword", forGotPassword)
  .post("/otp/verify/reset", verifyCodePass);

export { router };
