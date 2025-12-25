import express from "express";
import  { createOrder, cancelOrder, getOrders } from "../controller/order-controller.js";
import { authVerify } from "../middlewares/auth-middleware.js";

const router =  express.Router();

router.route("/").get(authVerify, getOrders);
router.route("/create").post(authVerify,createOrder);
router.route("/cancel/:orderId").delete(authVerify, cancelOrder);

export default router;