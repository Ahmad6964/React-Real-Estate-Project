import React from "react";
import "./Cform.scss";

const Cfrom = () => {
  return (
    <>
      <div>
        <div className="main-banner">
          <h1>CONTACT US</h1>
        </div>
        <section className="main-formdiv">
          <div className="container">
            <h1>ASK US ANYTHING</h1>
            <div className="form-container">
              <div className="row">
                <div className=" col-md-6 my-3">
                  <input
                    type="Name"
                    className="form-control"
                    placeholder="Name*"
                  />
                </div>
                <div className="email1 col-md-6 my-3">
                  <input
                    type="Email"
                    className="form-control"
                    placeholder="Email*"
                  />
                </div>
              </div>
              <div className="row">
                <div className=" col-md-6 my-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone*"
                  />
                </div>
                <div className=" col-md-6 my-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject*"
                  />
                </div>
              </div>
              <div className=" row">
                <div className="col-md-12 my-3">
                  <textarea class="form-control" rows="4"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button className="btn btn-danger btn-lg btn-block w-100">
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div className="row content-row">
              <div className="col-md-6 firstcol">
                <h2>Pakistan</h2>
                <h6>0800-ZAMEEN (92633)</h6>
                <p>
                  Pearl One, 94-B/I, MM Alam Road, Gulberg III, Lahore,
                  Pakistan.
                </p>
                <a href="">Get Direction</a>
              </div>
              <div className="col-md-6 ">
                <h2>Pakistan</h2>
                <h6>0800-ZAMEEN (92633)</h6>
                <p>
                  Pearl One, 94-B/I, MM Alam Road, Gulberg III, Lahore,
                  Pakistan.
                </p>
                <a href="">Get Direction</a>
              </div>
            </div>
          </div>
        </section>
        <div>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=141kQ_9rBTQi_mKSTSsvyxJqZc6E&ehbc=2E312F"
            width="100%"
            height="470"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Cfrom;
