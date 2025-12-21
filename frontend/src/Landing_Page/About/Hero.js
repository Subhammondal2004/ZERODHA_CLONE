import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="fs-4 text-center p-5 my-5">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breakingground with our technology.
        </h1>
      </div>
      <div className="row border-top py-5">
        <div className="col my-5 mx-5 px-5 text-muted" style={{lineHeight:"1.8"}}>
          <p style={{ fontSize: "18px" }}>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p style={{ fontSize: "18px" }}>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p style={{ fontSize: "18px" }}>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col my-5 px-5 mx-5 text-muted" style={{lineHeight:"1.8"}}>
          <p style={{ fontSize: "18px" }}>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p style={{ fontSize: "18px" }}>
            <a
              href="https://www.rainmatter.com"
              style={{ textDecoration: "none" }}
            >
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p style={{ fontSize: "18px" }}>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
