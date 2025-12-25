import React,{ useContext } from "react";
import { FundsContext } from "./FundContext";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Summary = ({user}) => {
  const { fund , loading } = useContext(FundsContext);
  if(loading){
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="username">
        <h6>Hi, {user.name}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 style={{color:"green"}}><CurrencyRupeeIcon />{fund.availableBal}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span><CurrencyRupeeIcon fontSize="12px"/>{fund.usedMargin}</span>{" "}
            </p>
            <p>
              Opening balance <span><CurrencyRupeeIcon fontSize="12px"/>{fund.openingBal}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
