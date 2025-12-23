import express from "express";

import { getPositions, getHoldings, addPosition, addHoldings } from "../controller/portfolio-controller.js";
const router = express.Router();

router.route("/holdings").get(getHoldings);
router.route("/positions").get(getPositions);
router.route("/add").get(addHoldings);

export default router;