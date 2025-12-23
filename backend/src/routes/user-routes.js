import express from "express";
import { signup, login,logout, loggedInUser } from "../controller/user-controller.js";
import { authVerify } from "../middlewares/auth-middleware.js";
const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(authVerify, logout);
router.route("/loggedinuser").get(authVerify, loggedInUser);

export default router;