import express from "express";
import dotenv from "dotenv";
import { connectionDB } from "./db/db-connection.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

connectionDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to DB", error);
  });
