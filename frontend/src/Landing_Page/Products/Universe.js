import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row">
        <div className="text-center my-5">
          <h1 className="fs-3 mb-4">The Zerodha Universe</h1>
          <p style={{ fontSize: "18px" }}>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="col-4 text-center">
          <a
            href="https://www.zerodhafundhouse.com/"
            target="_blank"
            style={{
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: "500",
            }}
            className="d-inline-block mb-5 mt-3"
          >
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ width: "50%", marginBottom: "10px" }}
            ></img>
            <p className="text-muted">
              Our asset management venture <br />
              that is creating simple and transparent index <br />
              funds to help you save for your goals.
            </p>
          </a>
          <a
            href="https://www.streak.tech/home"
            target="_blank"
            style={{
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: "500",
            }}
            className="d-inline-block my-5"
          >
            <img
              src="media/images/streakLogo.png"
              style={{ width: "50%", marginBottom: "10px" }}
            ></img>
            <p className="text-muted">
              Systematic trading platform <br />
              that allows you to create and backtest <br />
              strategies without coding.
            </p>
          </a>
        </div>
        <div className="col-4 text-center">
          <a
            href="https://sensibull.com/"
            target="_blank"
            style={{
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: "500",
            }}
            className="d-inline-block mb-5 mt-3"
          >
            <img
              src="media/images/sensibullLogo.svg"
              style={{ width: "90%", marginBottom: "20px" }}
            ></img>
            <p className="text-muted">
              Options trading platform that lets you <br />
              create strategies, analyze positions, and examine <br />
              data points like open interest, FII/DII, and more.
            </p>
          </a>
          <a
            href="https://smallcase.zerodha.com/"
            target="_blank"
            style={{
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: "500",
            }}
            className="d-inline-block my-5"
          >
            <img
              src="media/images/smallcaseLogo.png"
              style={{ width: "100%", marginBottom: "10px" }}
            ></img>
            <p className="text-muted">
              Thematic investing platform <br />
              that helps you invest in diversified <br />
              baskets of stocks on ETFs.
            </p>
          </a>
        </div>
        <div className="col-4 text-center">
          <a
            href="https://www.tijorifinance.com/dashboard/"
            target="_blank"
            style={{
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: "500",
            }}
            className="d-inline-block mb-5 mt-3"
          >
            <img
              src="media/images/tijori.svg"
              style={{ width: "60%", marginBottom: "10px" }}
            ></img>
            <p className="text-muted">
              Investment research platform <br />
              that offers detailed insights on stocks, <br />
              sectors, supply chains, and more.
            </p>
          </a>
          <a
            href="https://joinditto.in/"
            target="_blank"
            style={{
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: "500",
            }}
            className="d-inline-block my-5"
          >
            <img
              src="media/images/dittoLogo.png"
              style={{ width: "40%", marginBottom: "10px" }}
            ></img>
            <p className="text-muted">
              Personalized advice on life <br />
              and health insurance. No spam <br />
              and no mis-selling.
            </p>
          </a>
        </div>
        <div className="my-5 text-center">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "15%", margin: "0 auto" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
