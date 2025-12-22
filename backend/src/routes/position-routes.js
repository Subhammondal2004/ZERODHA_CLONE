import express from "express";

import { getPositions } from "../controller/positions.controller.js";
const router = express.Router();

router.route("/").get(getPositions);

export default router;