import React, { Fragment } from "react";

function News({ data }) {
  return (
    <Fragment>
      <div className="col-md-12 col-lg-6 col-xl-4">
        <div className="card mb-2 bg-gradient-dark" style={{borderStyle:"solid", borderWidth:"2px", borderColor:"black"}}>
          <img className="card-img-top" src={data.img} height="350" />
          <div className="card-img d-flex flex-column justify-content-end">
            <div
              className="card-text pt-3 pr-3 pl-3"
              style={{
                color: "#000000",
                backgroundColor: "#F4F6F6",
                opacity: "0.8",
                textAlign: "justify",
                height: "150px",
                borderTop: "2px solid #000000",
                overflow: "auto",
              }}
            >
              <h5 className="card-title" style={{ textTransform: "uppercase" }}>
                {data.category}
              </h5>
              <p className="card-text">
                <b>{data.title}</b> <br />
                {data.date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default News;
