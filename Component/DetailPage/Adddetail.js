import React from "react";
import "./Adddetail.scss";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import imgd from "../../imges/img-detail.jpg";
import bed from "../../imges/001-bed.svg";
import washroom from "../../imges/002-bathtub.svg";

const adddetail = () => {
  return (
    <>
      <div className="container main-detail-page">
        <div className="row">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Zameen</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Sydeny Property
            </Breadcrumb.Item>
          </Breadcrumb>
          <h3>
            Indoor Swimming Pool Mazhar Munir Design Kanal Brand New Bungalow
          </h3>
          <p>DHA Phase 6, DHA Defence, Lahore, Punjab</p>
        </div>
        <div className="row">
          <div className="col-md-8">
            <img src={imgd} alt="" className="w-100 " />
            <div className="adddetail-icon">
              <p>
                <span>
                  <img src={bed} alt="" />
                </span>
                3
              </p>
              <p>
                <span>
                  <img src={washroom} alt="" />
                </span>
                3
              </p>
              <p>
                <span>
                  <img src={bed} alt="" />
                </span>
                3
              </p>
            </div>
            <ul class="nav nav-pills nav-tab">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Overview
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Location & Nearby
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Price Index
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Trends
                </a>
              </li>
            </ul>
            <h2>Overview</h2>
            <div className="row overview">
              <div className="col-md-2 overview-hedding">
                <ul>
                  <li>Type</li>
                  <li>Price</li>
                  <li>Locattion</li>
                  <li>Bath</li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li>House</li>
                  <li>PKR 6.65 Crore</li>
                  <li>DHA Defence, Lahore, Punjab</li>
                  <li>6</li>
                </ul>
              </div>
              <div className="col-md-2 overview-hedding">
                <ul>
                  <li>Area</li>
                  <li>Purpose</li>
                  <li>Bathroom</li>
                  <li>Added</li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li>1 Cannel</li>
                  <li>For Sale</li>
                  <li>5</li>
                  <li>26 mint ago</li>
                </ul>
              </div>
            </div>
            <div className="discription">
              <h4>Discription</h4>
              <p>
                1 Kanal Antique Design Kanal Brand New Bungalow by Renowned
                Architect of Pakistan. located in finest location of DHA LAHORE
                Phase 6, Near Park And Masjid 1 year Structure and full house
                warranty from owner written in Agreement 1 kanal house located
                on 50 feet Road one minute walking distance from main Mosque.
                Splendid Double Height Lobby White and Bright Interior and
                Exterior 6 Master bedrooms with Attached Luxury baths,Grohee
                Fittings used in all washrooms. Spanish. INVERTER Splits in
                whole House Doors Height 9 feet solid ash wood doors with
                Italian Mandele Locks. Fully Automation house including lights,
                chandeliers fans and AC,s Italian SMC kitchen with All
                Accessories Imported Porcelain Spanish Tiles used for floors.{" "}
              </p>
            </div>
            <h5>Amenities</h5>
            <div className=" row Amenities">
              <div className="col-md-3">
                <h6>Main feacture</h6>
              </div>
              <div className="col-md-3">
                <ul>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                </ul>
              </div>
            </div>
            <div className=" row Amenities2">
              <div className="col-md-3">
                <h6>Main feacture</h6>
              </div>
              <div className="col-md-3">
                <ul>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                  <li>Built in year: 2021</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-2 ">
            <div className="vertical-card text-center">
              <h1>AUD 6.65 Crore</h1>
              <button className="btn btn-danger w-100">Call</button>
              <input
                type="text"
                className="form-control my-3 Input-feild"
                placeholder="Name"
              />
              <input
                type="text"
                className="form-control my-3 Input-feild"
                placeholder="Email"
              />
              <textarea rows="5" className="form-control">
                I would like to inquire about your property Zameen - ID31726934.
                Please contact me at your earliest convenience
              </textarea>

              <span>
              i,am
                <input type="radio" className="form-check-input" />
                <label htmlFor="">Buyer/Tenant</label>
              </span>
              <span>
                <input type="radio" className="form-check-input" />
                <label htmlFor="">Buyer/Tenant</label>
              </span>
              <span>
                <input type="radio" className="form-check-input" />
                <label htmlFor="">Buyer/Tenant</label>
              </span>

              <p>
                <span>
                  <input type="check" className="form-check-input" />
                </span>
                Keep me informed about similar properties.
              </p>
              <button className="btn btn-dark w-100">Email</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default adddetail;
