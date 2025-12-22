import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import { Holding } from "../models/holdings-model.js";

const getHoldings = asyncHandler(async(req, res)=>{
    const holdingData = await Holding.find({});

    res.status(200)
        .json(
            new ApiResponse(
                200,
                holdingData,
                "Holding data fetched successfully!!!"
            )
        )
})

export {
    getHoldings
}