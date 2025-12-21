import React from "react";

function RightImage({ imageUrl, productName, productDescription, learnMore }) {
  return (
    <div className="container">
      <div className="row mx-5 my-5">
        <div className="col-6 px-5 py-5 my-5">
          <h1 style={{ marginLeft: "20%", marginTop: "15%", fontSize: "25px" }}>
            {productName}
          </h1>
          <p style={{ width: "70%", marginLeft: "20%", lineHeight: "2" }}>
            {productDescription}
          </p>
          <div style={{ marginLeft: "10%" }}>
            <a
              className="d-inline-block mx-4 mb-3 px-4"
              href={learnMore}
              style={{ textDecoration: "none" }}
            >
              Learn More
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageUrl}></img>
        </div>
      </div>
    </div>
  );
}

export default RightImage;
