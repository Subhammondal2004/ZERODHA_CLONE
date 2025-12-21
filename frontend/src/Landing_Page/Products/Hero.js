import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="row text-center my-5 my-5 py-5">
        <h1 style={{fontSize:"30px"}}>Zerodha Products</h1>
        <p style={{fontSize:"20px"}}>Sleek, modern, and intuitive trading platforms</p>
        <p>
          Check out our
          <a href="" className="mx-1" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;