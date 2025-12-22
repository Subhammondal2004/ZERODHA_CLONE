import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className="p-5" id="supportTitle">
        <h3>Support Portal</h3>
        <a
          href=""
          style={{ textDecoration: "none", color: "white", fontSize: "17px" }}
        >
          Track Ticket
        </a>
      </div>
      <div className="row">
        <div className="col-6 p-5">
          <h4 className="fs-4 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h4>
          <input
            placeholder="Eg. how do I activate F&O"
            style={{
              width: "100%",
              height: "27%",
              borderRadius: "7px",
              border: "none",
              marginBottom:"5px"
            }}
          />
          <br />
          <a
            href=""
            style={{
              color: "white",
              marginLeft: "5px",
            }}
          >
            Track account opening
          </a>
          <a
            href=""
            style={{
              color: "white",
              marginLeft: "5px",
            }}
          >
            Track segment activation
          </a>
          <a
            href=""
            style={{
              color: "white",
              marginLeft: "5px",
            }}
          >
            Intraday margins
          </a>
          <a
            href=""
            style={{
              color: "white",
              marginLeft: "5px",
            }}
          >
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-5">
          <h4>Featured</h4>
          <ol>
            <li>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "5px",
                }}
              >
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "5px",
                }}
              >
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
