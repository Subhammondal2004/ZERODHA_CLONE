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

import portfolioRoute from "./routes/portfolio-routes.js";

app.use("/api/v1/portfolio", portfolioRoute);

export default app;