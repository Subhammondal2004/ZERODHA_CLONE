import mongoose, {Schema} from "mongoose";

const TradeSchema = new Schema({
    orderId:{
        type: Schema.Types.ObjectId,
        ref: "Order"
    },
    userId :{
        typr: Schema.Types.ObjectId,
        ref: "User"
    },
    name:{
        type:String,
        required: true
    },
    qty:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        required: true
    }
},{ timestamps: true}) 

export const Trade = mongoose.model("trade", TradeSchema);
