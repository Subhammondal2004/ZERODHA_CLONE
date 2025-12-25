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
    qty:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        required: true
    },
    tradedAt:{
        type: Date,
        default: Date.now()
    },
    orderType:{
        type:String
    }
},{ timestamps: true}) 

export const Trade = mongoose.model("trade", TradeSchema);
