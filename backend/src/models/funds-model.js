import mongoose, {Schema} from "mongoose";

const FundSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    availableBal:{
        type:Number,
        requied: true
    },
    usedMargin:{
        type: Number
    },
    openingBal:{
        type: Number
    }
},{ timestamps: true})

export const Fund = mongoose.model("fund", FundSchema);