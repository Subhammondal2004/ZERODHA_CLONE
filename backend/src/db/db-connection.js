import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const connectionDB = async()=>{
    try{
        const connsetionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`MongoDB connected! DB Host: ${connsetionInstance.connection.host}`);
    }catch( error){
        console.log('Error while connecting to DB', error);
        process.exit(1);
    }
}