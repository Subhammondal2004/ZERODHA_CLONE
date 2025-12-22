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
    qty:{
        type:Number,
        default:0
    },
    avg:{
        type:Number
    },
    net:{
        type:String
    },
    day:{
        type:String
    },
    isLoss:{
        type: Boolean,
        default: false
    }
},{ timestamps: true})

export const Position = mongoose.model("position", PositionSchema);