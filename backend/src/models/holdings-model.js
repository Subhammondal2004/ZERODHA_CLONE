import mongoose, {Schema} from "mongoose";

const HoldingSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    qty:{
        type: Number,
        default: 0
    },
    avg:{
        type: Number
    },
    price:{
        type: Number,
        required: true
    },
    curPrice:{
        type:Number,
    },
    isProfit:{
        type:Boolean,
        default:false
    },
    netCharge:{
        type: String
    },
    dayCharge:{
        type:String
    }
},{timestamps: true })

export const Holding =  mongoose.model("holding", HoldingSchema);