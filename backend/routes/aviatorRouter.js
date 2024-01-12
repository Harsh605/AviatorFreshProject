import { Router } from "express";
import { placeBet, withdrawBet } from "../controllers/aviatorController.js";
const router = Router();

// ==== routes setup =====
router.post("/place", placeBet);
router.post("/withdraw", withdrawBet);

export { router };
