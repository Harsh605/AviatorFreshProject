import { Router } from "express";
import {
  setReferDetatails,
  getAllBetData,
  getAllUserData,
  getAllWithdrawalRequest,
  acceptWithdraw,
  userSettings,
} from "../controllers/adminController.js";
import { defaultPagination } from "../utils/defaultPagination.js";
const router = Router();

// ==== routes setup =====
router
  .post("/setrefer", setReferDetatails)
  .get("/allbetdata", defaultPagination, getAllBetData)
  .get("/alluserdata", defaultPagination, getAllUserData)
  .get("/allwithdrawalrequest", defaultPagination, getAllWithdrawalRequest)
  .post("/acceptwithdraw", acceptWithdraw)
  .post("/usersettings", userSettings);

export { router };
