import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row border-top">
        <h1 className="fs-4 text-center my-5 pt-5">People</h1>
      </div>
      <div className="row mb-5">
        <div className="col text-center">
          <img
            src="media/images/nithinkamath.jpg"
            style={{ borderRadius: "100%", width: "40%" }}
          ></img>
          <h4 style={{ fontSize: "18px", marginTop: "10px" }}>Nithin Kamath</h4>
          <h5 style={{ fontSize: "16px" }}>Founder, CEO</h5>
        </div>
        <div className="col mx-5 px-5 " style={{ lineHeight: "1.5" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
