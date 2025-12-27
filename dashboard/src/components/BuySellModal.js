import "./FundModal.css";
import react, { useState, useEffect } from "react";
import axios from "axios";
import { handleAxiosError } from "../handleAxiosError";
import { useNavigate } from "react-router-dom";

export default function BuySellModal({ avg, type, onClose }) {
  const [price, setPrice] = useState(0.0);
  const [qty, setQty] = useState(0);
  const [name, setName] = useState("");
  const [buysell, setBuySell] = useState(null);
  const URL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();

  const handleBuySell = (type) => {
    axios
      .post(`${URL}/orders/create`, {
        name,
        price,
        avg,
        qty,
        orderType: type,
      })
      .then((res) => {
        setBuySell(res.data.data);
        onClose();
        navigate("/orders");
      })
      .catch((error) => {
        handleAxiosError(error);
      });
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3>{type === "BUY" ? "BUY" : "SELL"}</h3>

        <input
          type="String"
          placeholder="Enter Name"
          className="amount-input"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Price"
          className="amount-input"
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Enter quantity"
          className="amount-input"
          onChange={(e) => setQty(Number(e.target.value))}
        />

        <div className="modal-actions">
          <button
            className={type === "BUY" ? "btn btn-success" : "btn btn-danger"}
            style={{ width: "70px", fontSize: "15px", padding: "0px" }}
            onClick={() => {
              handleBuySell(type);
            }}
          >
            {type === "BUY" ? "BUY" : "SELL"}
          </button>

          <button
            className="btn btn-secondary"
            onClick={onClose}
            style={{ width: "70px", fontSize: "15px", padding: "0px" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
