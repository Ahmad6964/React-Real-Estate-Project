import React from "react";
import "./Agencies.scss";
import agency1 from "../../imges/agency-1.jpg";
import agency2 from "../../imges/agency-2.jpg";
import agency3 from "../../imges/agency-3.jpg";
import agency4 from "../../imges/agency-4.jpg";
import agency5 from "../../imges/agency-5.jpg";
import agency6 from "../../imges/agency-6.jpg";
import agency7 from "../../imges/agency-7.jpg";

const Agencies = () => {
  return (
    <>
      <div className="main-agency">
        <div className="container">
          <div className="row">
            <h1>Titanium agencies</h1>
            <div>
              <img src={agency1} alt="" />
              <img src={agency2} alt="" />
              <img src={agency3} alt="" />
              <img src={agency4} alt="" />
              <img src={agency5} alt="" />
              <img src={agency6} alt="" />
              <img src={agency7} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agencies;
