import app from "./app.js";
import dotenv from "dotenv";
import { connectionDB } from "./db/db-connection.js";

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
