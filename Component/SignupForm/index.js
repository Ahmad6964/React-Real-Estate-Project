import React from "react";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./index.scss";

const Index = () => {
 
 
 
  return (

    <>
      <div className="singup-banner">
        <Header />
        <h1>Signup From</h1>
      </div>
      <div className="sigup-form">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Create Your Account</h1>
              <form>
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="form-control"
                  name="fname"
                 
      
                />
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="form-control"
                  name="lname"
                />
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="Enter Email "
                  className="form-control"
                  name="email"
                />
                <label htmlFor="">Password</label>
                <input
                  type="text"
                  placeholder="Enter Password "
                  className="form-control"
                  name="pass"
                />
                <label htmlFor="">Confirm Password</label>
                <input
                  type="text"
                  placeholder="Confirm Password "
                  className="form-control"
                  name="cpass"
                />
                <button className="btn btn-danger" type="submit">
                  Register
                </button>
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Index;
