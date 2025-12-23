import React, {useState, useEffect} from "react";
import axios from "axios";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);
  const URL = process.env.REACT_APP_SERVER_URL;

  useEffect(()=> {
      axios.get(`${URL}/portfolio/holdings`).then((res)=>{
        setHoldings(res.data.data);
      })
  },[]);

  return (
    <>
      <h3 className="title">Holdings({holdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {holdings.map((stock, index) => {
            const profitClass = stock.isProfit ? "profit" : "loss";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.curPrice.toFixed(2)}</td>
                <td className={profitClass}>{(stock.curPrice - stock.avg * stock.qty).toFixed(2)}</td>
                <td className={profitClass}>{stock.netCharge}</td>
                <td className={profitClass}>{stock.dayCharge}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
