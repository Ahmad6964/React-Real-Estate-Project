import React from "react";
import "./Footer.scss";
import location from "../../imges/location-outline.svg";
import fb from "../../imges/facebook-f.svg";
import twit from "../../imges/twitter.svg";
import insta from "../../imges/instagram.svg";
import google from "../../imges/google-plus-g.svg";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineLocationMarker , HiPhoneMissedCall} from 'react-icons/hi';
import { AiOutlineMail} from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="fcol col-lg-3 col-md-6 col-sm-12 ">
              <ul>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/detail">Detail Page</NavLink>
                </li>
                <li>
                  <NavLink to="/inner">Inner Page</NavLink>
                </li>
                <li>Advertise On Zameen</li>
                <li>Terms Of Use</li>
              </ul>
            </div>
            <div className="fcol col-lg-3 col-md-6 col-sm-12 ">
              <ul>
                <li>Blog</li>
                <li>News</li>
                <li>Forum</li>
                <li>Expo</li>
                <li>Real Estate Agents</li>
                <li>Add Property</li>
              </ul>
            </div>
            <div className="fcol col-lg-3 col-md-6 col-sm-12">
              <ul>
                <li>Buy</li>
                <li>Rent</li>
                <li>Sold</li>
                <li>Polots</li>
                <li>New Project</li>
                <li>New Home</li>
              </ul>
            </div>
            <div className="scol fcol col-lg-3 col-md-6 col-sm-12">
              <ul>
                <li>
                <HiOutlineLocationMarker/> &nbsp; Pearl One, 94-B/I, MM Alam Road, Gulberg 3, Lahore,
                  Pakistan.
                </li>
                <li><HiPhoneMissedCall/> &nbsp; 0800-ZAMEEN (92633)</li>
                <li><AiOutlineMail/> &nbsp; Email Us</li>
              </ul>
            </div>
            <hr style={{ color: "white", padding: "1.5px" }} />
          </div>
          <div className="row hrrow">
            <div className="col-md-6 col-sm-12">
              <p>© 2021 companyname.com.au. All Rights Reserved</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="icons">
                <img src={fb} alt="" />
                <img src={insta} alt="" />
                <img src={google} alt="" />
                <img src={twit} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
