import express from "express";
import { addFund, getFund, withdrawFund } from "../controller/fund-controller.js";
import { authVerify } from "../middlewares/auth-middleware.js";
const router = express.Router();

router.route("/").get(authVerify, getFund);
router.route("/add").post(authVerify, addFund);
router.route("/withdraw").post(authVerify, withdrawFund);

export default router;