import React from "react";
import "./Detail.scss";
import pic from "../../imges/img1.jpg";
import bed from "../../imges/001-bed.svg";
import washroom from "../../imges/002-bathtub.svg";
import { Data } from "../../DATA/CardApi";
import Pagination from "react-bootstrap/Pagination";
import house from "../../imges/house.jpg";
import icon1 from "../../imges/icon1.svg";
import icon2 from "../../imges/icon2.svg";
import icon3 from "../../imges/icon3.svg";
import icon4 from "../../imges/icon4.svg";
import menu from "../../imges/menu.svg";
import { useState } from "react";

const Detail = () => {
  const [grid , setGrid] = useState(true);
  return (
    <>
      <section className="carddetail">
        <div className="container">
          <div className="row">
            <div className="form-feild">
              <div className="sub-feild">
                <p>1 to 25 of 29,122 Homes</p>
                <select name="" id="">
                  <option value="">Popular</option>
                </select>
              </div>
              <div>
                <img src={menu} alt="" onClick={()=> setGrid(true)} />
                <img src={menu} alt="" onClick={()=> setGrid(false)}/>
              </div>
            </div>
            {Data.slice(0,3).map((items) => {
              return (
                <div className="container">
                  <div className="main-card">
                  {!grid &&(<h1 className="gridh">husnain</h1>)}
                  {grid && (  <div className="card-content" key={items.id}>
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src={items.img}
                            alt=""
                            className="img fluid h-100 w-100"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-md-10">
                              <h5>{items.price}</h5>
                              <p>{items.Location}</p>
                              <div className="rooms-icon">
                                <p>
                                  <span>
                                    <img src={bed} alt="" />
                                  </span>
                                  {items.Bed}
                                </p>
                                <p>
                                  <span>
                                    <img src={washroom} alt="" />
                                  </span>
                                  {items.Washroom}
                                </p>
                                <p>
                                  <span>
                                    <img src={bed} alt="" />
                                  </span>
                                  {items.Washroom}
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2 text-end icons">
                              <img src={icon4} alt="" />
                              <img src={icon2} alt="" />
                              <img src={icon3} alt="" />
                              <img src={icon1} alt="" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <h6>{items.title}</h6>
                              <p>
                                Harum Estate offer Beautiful house Fasad Elegant
                                Modern Design Villa. located in finest
                                location... more
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 btn-col">
                              <p> Added: 2 hours ago</p>
                              <button className="btn btn-danger">Call</button>
                              <button className="btn btn-dark">Email</button>
                            </div>
                            <div className="col-lg-6 housepic-col">
                              <img
                                src={house}
                                className="housepic"
                                style={{ width: "100px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>)}
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination style={{ justifyContent: "end" }}>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Item>{7}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </section>
    </>
  );
};

export default Detail;
