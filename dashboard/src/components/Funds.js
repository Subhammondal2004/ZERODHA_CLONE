import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FundModal from "./FundModal";
import { handleAxiosError } from "../handleAxiosError";

const Funds = ({ user }) => {
  const [fund, setFund] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modaltype, setModalType] = useState(null);
  const URL = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    axios
      .get(`${URL}/funds/`, { withCredentials: true })
      .then((res) => {
        setFund(res.data.data);
      })
      .catch((err) => {
        handleAxiosError(err)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fund]);

  if(loading){
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <button className="btn btn-green" onClick={() => setModalType("add")}>Add funds</button>
        <button className="btn btn-blue" onClick={() => setModalType("withdraw")}>Withdraw</button>
        {modaltype && (
        <FundModal
          type={modaltype}
          onClose={() => setModalType(null)}
        />
        )}
      </div>
      

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data m-5">
              <p>Available margin</p>
              <p>{fund.availableBal}</p>
            </div>
            <div className="data m-5">
              <p>Used margin</p>
              <p>{fund.usedMargin}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{fund.availableBal}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{fund.openingBal}</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;