import mongoose, {Schema} from "mongoose";

const PositionSchema = new Schema({
    product:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    buyqty:{
        type:Number,
        default:0
    },
    sellqty:{
        type:Number,
        default:0
    },
    qty:{
        type:Number,
        default:0
    },
    avg:{
        type:Number
    },
    price:{
        type:Number
    },
    curPrice:{
        type:Number,
        default:0
    },
    dayCharge:{
        type:String
    },
    isLoss:{
        type: Boolean,
        default: false
    }
},{ timestamps: true})

export const Position = mongoose.model("position", PositionSchema);