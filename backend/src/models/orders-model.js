import mongoose, {Schema} from "mongoose";

const OrderSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        default:1
    },
    mode:{
        type:String
    }
},{ timestamps: true})

export const Order = mongoose.model("order", OrderSchema);