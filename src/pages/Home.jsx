import React, { useState, useEffect, Fragment } from "react";
import Data from "./results/deportes.json";
function Home() {
  return (
    <Fragment>
      <div className="card card-success">
        <div className="card-body bg-white">
          <div className="row">
            {/*Zona izquierda*/}
            <div className="col-xl-3">
              {/*Noticia 2*/}
              <div
                className="card mb-2" style={{borderStyle:"solid", borderWidth:"2px", borderColor:"black"}}
              >
                <img
                  className="card-img-top"
                  src={Data["news"][1].img}
                  alt="Dist Photo 1"
                  // width="100"
                  height="250"
                />
                <div className="card-img d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-2 pr-2 pl-2 pb-2"
                    style={{
                      color: "#000000",
                      backgroundColor: "#ABB2B9",
                      textAlign: "justify",
                      height: "150px",
                      borderTop: "2px solid #000000",
                      overflow: "auto",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["news"][1].category}
                    </h5>
                    <p className="card-text">
                      <b>{Data["news"][1].title}</b> <br />
                      {Data["news"][1].date}
                    </p>
                  </div>
                </div>
              </div>
              {/* NOTICIA 4*/}
              <div className="card mb-2 bg-gradient-dark" style={{borderStyle:"solid", borderWidth:"2px", borderColor:"black"}}>
                <img
                  className="card-img-top"
                  src={Data["news"][3].img}
                  alt="Dist Photo 1"
                  // width="100"
                  height="250"
                />
                {/*Parte izquierda superior*/}
                <div className="card-img d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-2 pr-2 pl-2 pb-2"
                    style={{
                      color: "#000000",
                      backgroundColor: "#ABB2B9",                    
                      textAlign: "justify",
                      height: "150px",
                      borderTop: "2px solid #000000",
                      overflow: "auto",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["news"][3].category}
                    </h5>
                    <p className="card-text">
                      <b>{Data["news"][3].title}</b> <br />
                      {Data["news"][3].date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* NOTICIA 1*/}
            <div className="col-md-12 col-lg-6 col-xl-6">
              <div className="card mb-2" style={{borderStyle:"solid", borderWidth:"2px", borderColor:"black"}}>
                <img
                  className="card-img-top"
                  src={Data["news"][0].img}
                  alt="Dist Photo 2"
                  height="622"
                />
                <div className="card-img d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-2 pr-2 pl-2"
                    style={{
                      color: "#000000",
                      backgroundColor: "#ABB2B9",
                      textAlign: "justify",
                      height: "190px",
                      borderTop: "2px solid #000000",
                      overflow: "auto",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["news"][0].category}{" "}
                    </h5>
                    <h5 className="card-text" >
                      <b>{Data["news"][0].title}</b>
                    </h5>
                    <p>{Data["news"][0].date} <br/>
                    <a href="" className="text">
                      <b>Leer más...</b>
                    </a><br/>
                    <a href="" className="text-black" >
                      <b>Nube de palabras</b>
                    </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* NOTICIA 3*/}
            <div className="col-md-12 col-lg-6 col-xl-3">
              <div className="card mb-2" style={{borderStyle:"solid", borderWidth:"2px", borderColor:"black"}}>
                <img
                  className="card-img-top"
                  src={Data["news"][2].img}
                  alt="Dist Photo 3"
                  height="250"
                />
                <div className="card-img d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-2 pr-2 pl-2 pb-2"
                    style={{
                      color: "#000000",
                      backgroundColor: "#ABB2B9",
                      textAlign: "justify",
                      height: "150px",
                      borderTop: "2px solid #000000",
                      overflow: "auto",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["news"][2].category}
                    </h5>
                    <p className="card-text">
                      <b>{Data["news"][2].title}</b> <br />
                      {Data["news"][2].date}
                    </p>
                  </div>
                </div>
              </div>
              {/* NOTICIA 5*/}
              <div className="card mb-2" style={{borderStyle:"solid", borderWidth:"2px", borderColor:"black"}}>
                <img
                  className="card-img-top"
                  src={Data["news"][4].img}
                  alt="Dist Photo 3"
                  height="250"
                />
                <div className="card-img d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-2 pr-2 pl-2 pb-2"
                    style={{
                      color: "#000000",
                      backgroundColor: "#ABB2B9",
                      textAlign: "justify",
                      height: "150px",
                      borderTop: "2px solid #000000",
                      overflow: "auto",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["news"][4].category}
                    </h5>
                    <p className="card-text">
                      <b>{Data["news"][4].title}</b> <br />
                      {Data["news"][4].date}
                    </p>
                  </div>
                </div>
              </div>
              {/* NOTICIA 7*/}
            </div>
            {/* NOTICIA N*/}
            <div className="col-md-12 col-lg-6 col-xl-6">
              {/* NOTICIA 2*/}
              <div className="card mb-2 bg-gradient-dark" style={{borderStyle:"solid", borderWidth:"2px", borderColor:"black"}}>
                <img
                  className="card-img-top"
                  src={Data["news"][5].img}
                  alt="Dist Photo 1"
                  // width="100"
                  height="250"
                />
                {/*Parte izquierda inferior*/}
                <div className="card-img d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-2 pr-2 pl-2 pb-2"
                    style={{
                      color: "#000000",
                      backgroundColor: "#ABB2B9",
                      textAlign: "justify",
                      height: "150px",
                      borderTop: "2px solid #000000",
                      overflow: "auto",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["news"][5].category}
                    </h5>
                    <p className="card-text">
                      <b>{Data["news"][5].title}</b> <br />
                      {Data["news"][5].date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* NOTICIA 7*/}
            <div className="col-md-12 col-lg-6 col-xl-6">
              <div className="card mb-2 bg-gradient-dark" style={{borderStyle:"solid", borderWidth:"2px", borderColor:"black"}}>
                <img
                  className="card-img-top"
                  src={Data["news"][6].img}
                  alt="Dist Photo 1"
                  // width="100"
                  height="250"
                />
                {/*Parte izquierda superior*/}
                <div className="card-img d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-2 pr-2 pl-2 pb-2"
                    style={{
                      color: "#000000",
                      backgroundColor: "#ABB2B9",
                      textAlign: "justify",
                      height: "150px",
                      borderTop: "2px solid #000000",
                      overflow: "auto",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["news"][6].category}
                    </h5>
                    <p className="card-text">
                      <b>{Data["news"][6].title}</b> <br />
                      {Data["news"][6].date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
