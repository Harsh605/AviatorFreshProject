import { Router } from "express";

import {
  getUserInfo,
  protect,
  withDraw,
  transferMoney,
} from "../controllers/userController.js";
const router = Router();

// ==== routes setup =====
router
  .get("/getUserInfo", protect, getUserInfo)
  .post("/withdraw", withDraw)
  .post("/transfer", transferMoney);

export { router };
