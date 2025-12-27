import app from "./app.js";
import dotenv from "dotenv";
import { connectionDB } from "./db/db-connection.js";

dotenv.config();

const PORT = process.env.PORT  || 8000;

connectionDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to DB", error);
  });


app.get("/", (req, res)=>{
  res.status(200).json({ message: "Backend is running!"})
})
