import "./FundModal.css";
import react, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { handleAxiosError } from "../handleAxiosError";

export default function FundModal({ type, onClose }) {
  const [amount, setAmount] = useState(0);
  const [addfund, setAddFund] = useState(null);
  const [withdrawfund, setWithdrawFund] = useState(null);
  const URL = process.env.REACT_APP_SERVER_URL;
  
  const handleAddFunds = () => {
    axios
      .post(`${URL}/funds/add`, { amount: amount }, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        setAddFund(res.data.data);
        onClose();
      })
      .catch((err) => {
        handleAxiosError(err);
      });
  };

  const handleWithdrawFunds = () => {
    axios
      .post(
        `${URL}/funds/withdraw`,
        { amount: amount },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success(res.data.message);
        setWithdrawFund(res.data.data);
        onClose();
      })
      .catch((err) => {
        handleAxiosError(err);
      });
  };

  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3>{type === "add" ? "Add Funds" : "Withdraw Funds"}</h3>

        <input
          type="number"
          placeholder="Enter amount"
          className="amount-input"
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <div className="modal-actions">
          <button
            className={type === "add" ? "btn btn-success" : "btn btn-danger"}
            onClick={() => {
              if (type === "add") {
                handleAddFunds();
              } else {
                handleWithdrawFunds();
              }
            }}
          >
            {type === "add" ? "Add" : "Withdraw"}
          </button>

          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
