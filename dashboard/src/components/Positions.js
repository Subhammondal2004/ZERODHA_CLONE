import React, { useState, useEffect} from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const URL = process.env.REACT_APP_SERVER_URL;
  useEffect(()=>{
    axios.get(`${URL}/portfolio/positions`).then((res)=>{
      setPositions(res.data.data);
    })
  },[]);
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {positions.map((stock, index) => {
            const isProfit = stock.curPrice - stock.avg * stock.qty >= 0.0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayChange = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profitClass}>
                  {(stock.curPrice - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayChange}>{stock.dayCharge}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
