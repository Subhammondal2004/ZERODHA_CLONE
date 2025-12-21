import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="text-center my-5">
          <h1 className="mt-5 fs-3">Charges</h1>
          <p className="text-muted fs-5 mt-3 mb-5">List of all charges and taxes</p>
        </div>
        <div className="col-4 my-5 text-center p-5">
          <img src="media/images/pricingEquity.svg" style={{width:"75%"}}/>
          <h1 className='fs-2 mb-5'>Free equity delivery</h1>
          <p className="text-muted" style={{fontSize:"18px"}}>
            All equity delivery investments (NSE, BSE),
            <br /> are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4 my-5 text-center p-5">
          <img src="media/images/intradayTrades.svg" style={{width:"75%"}}></img>
          <h1 className='fs-2 mb-5'>Intraday and F&O trades</h1>
          <p className="text-muted" style={{fontSize:"18px"}}>
            Flat ₹ 20 or 0.03% (whichever is lower) per
            <br />
            executed order on intraday trades across
            <br />
            equity, currency, and commodity trades. Flat
            <br />
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 my-5 text-center p-5">
          <img src="media/images/pricingMF.svg" style={{width:"75%"}}></img>
          <h1 className='fs-2 mb-5'>Free direct MF</h1>
          <p className="text-muted" style={{fontSize:"18px"}}>
            All direct mutual fund investments are
            <br />
            absolutely free — ₹ 0 commissions & DP
            <br />
            charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;