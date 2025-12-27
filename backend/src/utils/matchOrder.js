import { Order } from "../models/orders-model.js";
import { Trade } from "../models/trade-model.js";
import { Holding } from "../models/holdings-model.js";
import { Fund } from "../models/funds-model.js";

const matchOrders = async () => {
  const buyOrders = await Order.find({
    orderType: "BUY",
    status: "OPEN",
  }).sort({ price: -1, createdAt: 1 });

  const sellOrders = await Order.find({
    orderType: "SELL",
    status: "OPEN",
  }).sort({ price: 1, createdAt: 1 });

  for (const buy of buyOrders) {
    for (const sell of sellOrders) {
      if (buy.price < sell.price) break;

      const tradedQty = Math.min(buy.qty, sell.qty);
      const tradePrice = sell.price;

      await Trade.create({
        userId: buy.userId,
        orderId: buy._id,
        qty: tradedQty,
        price: tradePrice,
        orderType: "BUY",
        tradedAt: new Date(),
      });

      await Trade.create({
        userId: sell.userId,
        orderId: sell._id,
        qty: tradedQty,
        price: tradePrice,
        orderType: "SELL",
        tradedAt: new Date(),
      });

      buy.qty -= tradedQty;
      sell.qty -= tradedQty;

      if (buy.qty === 0) buy.status = "COMPLETE";
      if (sell.qty === 0) sell.status = "COMPLETE";

      await buy.save();
      await sell.save();

      await updateHolding(buy.avg, buy.name, tradedQty, tradePrice);

      await settleFunds(buy.userId, tradedQty * tradePrice);

      if (buy.status === "COMPLETE") break;
    }
  }
};

const updateHolding = async (avg, name, qty, price) => {
  const holdings = await Holding.create({
    name,
    qty,
    avg,
    price,
    curPrice: price * qty,
    isProfit: price * qty - avg * qty >= 0.0
  });
};

const settleFunds = async (userId, amount) => {
  const fund = await Fund.findOne({ userId });
  fund.usedMargin -= amount;
  await fund.save();
};


export {
  matchOrders
}