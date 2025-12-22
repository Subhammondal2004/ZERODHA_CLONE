import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

const OPTIONS={
    origin:[
        "http://localhost:3001"
    ],
    Credential: true
}

app.use(cors(OPTIONS));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
app.use(cookieParser());

import holdingRoute from "./routes/holding-routes.js";
import positionRoute from "./routes/position-routes.js";

app.use("/api/v1/holding",holdingRoute);
app.use("/api/v1/position", positionRoute)

export default app;