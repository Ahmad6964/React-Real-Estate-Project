import React from "react";
import "./Ready.scss";
import ios from "../../imges/ios.png";
import playstore from "../../imges/playstore.png";
import mobile from "../../imges/mobile.png";

const Ready = () => {
  return (
    <>
      <div className="main-ready">
        <div className="container">
          <div className="row ready-row">
            <div className="col-sm-12 col-md-12 col-lg-6 ready-content">
              <div className="content">
                <h1>Ready To Get Started?</h1>
                <p>
                  Download the Homely app to find homes to buy or rent, save and
                  share your favourite properties and get real-time alerts.
                </p>
                <img src={ios} alt="" />
                <img src={playstore} alt="" />
              </div>
            </div>
            <div className="col-md-7 col-lg-6 ">
              <div className="ready-img">
                <img src={mobile} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ready;
