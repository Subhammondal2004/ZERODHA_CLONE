import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import { Position } from "../models/position-model.js";

const getPositions = asyncHandler(async(req, res)=>{
    const positionData = await Position.find({});

    res.status(200)
        .json(
            new ApiResponse(
                200,
                positionData,
                "Position data fetched successfully!!!"
            )
        )
})

export {
    getPositions
}