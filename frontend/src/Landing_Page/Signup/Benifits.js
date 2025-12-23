import React from "react";

function Benefit() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5 p-5">
            <h2 className="mt-5 mb-2 fs-3">Unbeatable pricing</h2>
            <p className="mb-4">Zero charges for equity & mutual fund investments. Flat ₹20 fees for <br/> intraday and F&O trades.</p>
            <h2 className="mb-2 fs-3">Best investing experience</h2>
            <p className="mb-4">Simple and intuitive trading platform with an easy-to-understand user <br/> interface.</p>
            <h2 className="mb-2 fs-3">No spam or gimmicks</h2>
            <p className="mb-4">Committed to transparency — no gimmicks, spam, "gamification", or <br/> intrusive push notifications.</p>
            <h2 className="mb-2 fs-3">The Zerodha universe</h2>
            <p className="mb-4">More than just an app — gain free access to the entire ecosystem of<br/> our partner products.</p>
        </div>
        <div className="col-6">
          <img
            src="media/images/acop-benefits.svg"
            style={{ width: "600px", height: "550px" }}
          ></img>
          <h2 className="fs-4">Benefits of opening a Zerodha demat account</h2>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
