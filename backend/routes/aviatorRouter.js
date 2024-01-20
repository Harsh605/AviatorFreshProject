import { Router } from "express";
import {
  placeBet,
  totalSumAmount,
  withdrawBet,
} from "../controllers/aviatorController.js";
const router = Router();

// ==== routes setup =====
router.post("/place", placeBet);
router.post("/withdraw", withdrawBet);
router.get("/getallamount", totalSumAmount);

export { router };
