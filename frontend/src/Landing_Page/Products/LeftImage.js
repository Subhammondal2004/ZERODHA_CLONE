import React from "react";

function LeftImage({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlayLink,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row mx-5 my-5">
        <div className="col-6">
          <img src={imageUrl}></img>
        </div>
        <div className="col-6 px-5 py-5 my-5">
          <h1 style={{ marginLeft: "20%", fontSize: "25px" }}>{productName}</h1>
          <p style={{ width: "70%", marginLeft: "20%", lineHeight: "2" }}>
            {productDescription}
          </p>
          <div style={{ marginLeft: "10%" }}>
            <a
              className="d-inline-block mx-4 mb-3 px-4"
              href={tryDemo}
              style={{ textDecoration: "none" }}
            >
              Try Demo
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              className="d-inline-block mx-5 mb-3 px-2"
              style={{ textDecoration: "none" }}
            >
              Learn More
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div style={{ marginLeft: "10%" }}>
            <a href={googlePlayLink} className="d-inline-block mx-5">
              <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore}>
              <img src="media/images/appStoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
