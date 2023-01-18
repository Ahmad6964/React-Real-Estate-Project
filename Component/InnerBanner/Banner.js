import React from "react";
import "../InnerBanner/Banner.scss";

const Banner = () => {
  return (
    <>
      <section className="innerbanner">
        <div className="container">
          <div className="row upper">
            <div className="col-lg-4">
              <select name="" id="" className="small" style={{marginRight:"2%"}}>
                <option value="">select</option>
              </select>
              <select name="" id="" className="med1">
                <option value="">select</option>
              </select>
            </div>
            <div className="col-lg-4">
              <select name="" id="" className="large">
                <option value="">select</option>
              </select>
            </div>
            <div className="col-lg-4">
              <select name="" id="" className="med" style={{marginRight:"2%"}}>
                <option value="">select</option>
              </select>
              <select name="" id="" className="med">
                <option value="">select</option>
              </select>
            </div>
          </div>


          <div className="row upper">
            <div className="col-lg-4">
              <select name="" id="" className="large">
                <option value="">select</option>
              </select>
            </div>
            <div className="col-lg-4">
              <select name="" id="" className="med"  style={{marginRight:"2%"}}>
                <option value="">select</option>
              </select>
              <select name="" id="" className="med">
                <option value="">select</option>
              </select>
            </div>
            <div className="col-lg-4">
              <select name="" id="" className="med" style={{marginRight:"2%"}}>
                <option value="">select</option>
              </select>
              <select name="" id="" className="med">
                <option value="">select</option>
              </select>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
