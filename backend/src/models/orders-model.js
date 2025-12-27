import mongoose, {Schema} from "mongoose";

const OrderSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    name:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        default:0
    },
    avg:{
        type:Number
    },
    price:{
        type:Number,
        default:0
    },
    orderType:{
        type:String,
        enum:["BUY", "SELL"]
    },
    status:{
        type:String,
        enum:["OPEN", "COMPLETE", "CANCELLED", "REJECTED"],
        default:"OPEN"
    }
},{ timestamps: true})

export const Order = mongoose.model("order", OrderSchema);