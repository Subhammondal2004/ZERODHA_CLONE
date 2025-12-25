import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const URL = process.env.REACT_APP_SERVER_URL;
  useEffect(() => {
    axios.get(`${URL}/orders/`,{
      withCredentials: true
    }).then((res) => {
      setOrders(res.data.data);
    });
  }, []);
  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>OrderType</th>
            <th>Status</th>
          </tr>

          {orders.map((order) => {
            return (
              <tr key={order}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.orderType}</td>
                <td>{order.status}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;
