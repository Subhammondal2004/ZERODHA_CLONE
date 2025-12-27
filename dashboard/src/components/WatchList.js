import React, { useContext, useState } from "react";
import BuySellModal from "./BuySellModal";

import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { watchList } from "../data/data";
import { DoughnutChart } from "./DoughnutChart";

const labels = watchList.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchList.map((stoc) => stoc.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchList.length} / 50</span>
      </div>

      <ul className="list">
        {watchList.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchList, setShowWatchList] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchList(true);
  };
  const handleMouseLeave = (e) => {
    setShowWatchList(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchList && <WatchListActions avg={stock.price} />}
    </li>
  );
};

const WatchListActions = ({ avg }) => {
  // const generalContext = useContext(GeneralContext);

  // const handleBuyClick = () => {
  //   generalContext.openBuyWindow(uid);
  // };
  const [modaltype, setModalType] = useState(null);
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={() => setModalType("BUY")}
        >
          <bottom className="buy">Buy</bottom>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={() => setModalType("SELL")}
        >
          <bottom className="sell">Sell</bottom>
        </Tooltip>
        {modaltype && (
          <BuySellModal type={modaltype} avg={avg} onClose={() => setModalType(null)} />
        )}
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <bottom className="action">
            <BarChartOutlined className="icon" />
          </bottom>
        </Tooltip>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <bottom className="action">
            <MoreHoriz className="icon" />
          </bottom>
        </Tooltip>
      </span>
    </span>
  );
};
