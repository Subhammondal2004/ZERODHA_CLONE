import express from "express";

import { getHoldings } from "../controller/holdings-controller.js";
const router = express.Router();

router.route("/").get(getHoldings);

export default router;