import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import {Fund} from "../models/funds-model.js";

const getFund = asyncHandler(async(req, res)=>{
    const fund = await Fund.findOne({ userId: req.user._id});
    if(!fund){
        throw new ApiError(404, "Fund not found");
    }

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            fund,
            "Fund fetched successfully!"
        )
    )
})

const addFund = asyncHandler(async(req, res)=>{
    const { amount } = req.body;
    const fund = await Fund.findOne({ userId: req.user._id});
    if(!fund){
        throw new ApiError(404, "Fund not found");
    }

    fund.availableBal += amount;
    fund.openingBal += amount;
    await fund.save();

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            fund,
            `${amount} added successfully to your fund!`
        )
    )
})

const withdrawFund = asyncHandler (async (req, res)=>{
    const { amount } = req.body;
    const fund = await Fund.findOne({ userId: req.user._id});
    if(!fund){
        throw new ApiError(404, "Fund not found");
    }

    if(fund.availableBal - fund.usedMargin < amount){
        throw new ApiError(400, "Insufficient balance to withdraw");
    }
    
    fund.availableBal -= amount;
    await fund.save();

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            fund,
            `${amount} withdrawn successfully from your fund!`
        )
    )
})

export {
    getFund,
    addFund,
    withdrawFund
}