import React from "react";
import "../PropertyDetail/PropertyD.scss";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Index = () => {
  return (
    <>
      <section className="propertydetail">
        <div className="container">
          <div className="row property-first">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Zameen</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Sydeny Property
              </Breadcrumb.Item>
            </Breadcrumb>
            <h3>29,122 Properties for Sale in sydney</h3>
            <div className="content-item">
              <div>
                <h6>All Homes</h6>
                <p>(29,122)</p>
              </div>
              <div>
                <h6>Houses</h6>
                <p>(29,122)</p>
              </div>
              <div>
                <h6>Flats</h6>
                <p>(29,122)</p>
              </div>
            </div>
            <div className="link-div">
              <a href="">View All Locations in Lahore</a>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="frow">
              <h4>Locations of Homes For Sale in Lahore</h4>
              <div className="form-check form-switch">
                <span>Sort Alphabetically</span>
                <input className="form-check-input" type="checkbox" />
              </div>
            </div>
          </div>
          <div className="row srow">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ul>
                <li>DHA Defence(5,633)</li>
                <li>Bahria Town(2,443)</li>
                <li>Johar Town(1,076)</li>
                <li>Askari(1,059)</li>
                <li>Raiwind Road(713)</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ul>
                <li>Lahore Medical Housing Society(277)</li>
                <li>Sabzazar Scheme(265)</li>
                <li>GT Road(257)</li>
                <li>Samanabad(257)</li>
                <li>Lalazaar Garden(240)</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ul>
                <li>Harbanspura(139)</li>
                <li>Garden Town(132)</li>
                <li>Faisal Town(130)</li>
                <li>Divine Gardens(127)</li>
                <li>PIA Housing Scheme(123)</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ul>
                <li>Lahore Medical Housing Society(277)</li>
                <li>Sabzazar Scheme(265)</li>
                <li>GT Road(257)</li>
                <li>Samanabad(257)</li>
                <li>Samanabad(257)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
