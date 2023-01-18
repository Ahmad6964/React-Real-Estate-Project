import React from "react";
import "./Banner.scss";
import CurrencyModel from "../Model/CurrencyModel";
import { useState } from "react";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoMdArrowDropdown,
} from "react-icons/io";
import AreaModel from "../Model/AreaModel";

const Banner = () => {
  const [show, setShow] = useState(true);
  const [OpenModel, setModel] = useState(false);
  const [Area, setArea] = useState(false);
  const [serch, setSearch] = useState();

  const handelChange = (e) => {
    setSearch(e.target.value);
    
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(serch);
  };

  return (
    <>
      <CurrencyModel open={OpenModel} close={() => setModel(false)} />
      <AreaModel open={Area} close={() => setArea(false)} />
      <section id="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <button>Buy</button>
              <button>Sold</button>
              <button>Sale</button>
              <button>New Project</button>
              <button>Find Agent</button>
              <form onSubmit={handelSubmit}>
                <div className="from-feild">
                  <select className="small-input" name="city">
                    <option value="">Karachi</option>
                    <option value="">Lahore</option>
                    <option value="">Fasilabad</option>
                  </select>

                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Location"
                      aria-describedby="button-addon2"
                      name="sbox"
                      onChange={handelChange}
                      
                    />
                    <button
                      class="btn btn-outline-secondary"
                      type="Submit"
                      id="button-addon2"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
              {show && (
                <div className="form-feild2">
                  <select className="small-input">
                    <option value="">Select City</option>
                    <option value="">Karachi</option>
                    <option value="">Lahore</option>
                    <option value="">Fasilabad</option>
                  </select>
                  <select className="small-input">
                    <option value="">Select City</option>
                    <option value="">Karachi</option>
                    <option value="">Lahore</option>
                    <option value="">Fasilabad</option>
                  </select>
                  <select className="small-input">
                    <option value="">Select City</option>
                    <option value="">Karachi</option>
                    <option value="">Lahore</option>
                    <option value="">Fasilabad</option>
                  </select>
                  <select className="small-input">
                    <option value="">Select City</option>
                    <option value="">Karachi</option>
                    <option value="">Lahore</option>
                    <option value="">Fasilabad</option>
                  </select>
                </div>
              )}

              <div className="form-feild3">
                <p onClick={() => setShow(!show)}>
                  {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  {show ? "Less Option" : "More Option"}
                </p>
                <p onClick={() => setModel(true)}>Change Currency</p>
                <p onClick={() => setArea(true)}>Change Area Unit</p>
                <p>Reset Search</p>
                <p>Popular Cities</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="right-side">
                <h4 className="w-100">Popular Cities</h4>
                <button className="w-100">
                  <IoIosArrowUp />
                </button>
                <div className="para">
                  <p>
                    <span>Karachi</span>(37,409)
                  </p>
                  <p>
                    <span>Karachi</span>(37,409)
                  </p>
                  <p>
                    <span>Karachi</span>(37,409)
                  </p>
                  <p>
                    <span>Karachi</span>(37,409)
                  </p>
                  <p>
                    <span>Karachi</span>(37,409)
                  </p>
                  <p>
                    <span>Karachi</span>(37,409)
                  </p>
                </div>
                <button className="w-100">
                  <IoIosArrowDown />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
