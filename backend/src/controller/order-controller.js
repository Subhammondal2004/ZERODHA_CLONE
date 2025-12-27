import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { Order } from "../models/orders-model.js";
import { Fund } from "../models/funds-model.js";
import { matchOrders } from "../utils/matchOrder.js";

const createOrder = asyncHandler( async (req, res)=>{
    const { name, avg, price, qty, orderType } = req.body;

    if([name, avg, price, qty, orderType].some((field) => field === "")){
        throw new ApiError(400, "All fields are required!");
    }

    const fund = await Fund.findOne({ userId: req.user._id });
    if(!fund){
        throw new ApiError(404, "Fund not found for user!");
    }

    const requiredAmt = price * qty;
    if(orderType === "BUY" && fund.availableBal < requiredAmt){
        throw new ApiError(400, "Insufficient balance to place order!");
    }

    if(orderType === "BUY"){
        fund.availableBal -= requiredAmt;
        fund.usedMargin += requiredAmt;
        await fund.save();
    }

    const order = await Order.create({
        userId: req.user._id,
        name,
        price,
        avg,
        qty,
        orderType
    })

    matchOrders();

    return res
    .status(201)
    .json(
        new ApiResponse(
            201,
            order,
            "User order created successfully!"
        )
    )
})

const cancelOrder = asyncHandler(async(req, res)=>{
    const { orderId } = req.params;
    const order =  await Order.findById(orderId);
    if(!order){
        throw new ApiError(400, "Order not found!");
    }

    order.status = "CANCELLED";
    await order.save();

    if(order.orderType === "BUY"){
        const fund = await Fund.findOne({ userId: req.user._id});
        const refund = order.price * order.qty;
        fund.availableBal += refund;
        fund.usedMargin -= refund;
        await fund.save();
    }

    await Order.findByIdAndDelete(orderId);

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            [],
            "Order cancelled successfully!"
        )
    )
})

const getOrders = asyncHandler(async(req, res)=>{
    const orders = await Order.find({ 
        userId: req.user._id,
        status: { $ne: "COMPLETE" }
     });

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            orders,
            "Order fetched successfully!"
        )
    )
})

export{
    createOrder,
    cancelOrder,
    getOrders
}