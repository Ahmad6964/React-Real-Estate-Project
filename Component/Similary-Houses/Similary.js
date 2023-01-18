import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bed from "../../imges/001-bed.svg";
import washroom from "../../imges/002-bathtub.svg";
import "./Similary.scss";
import img from "../../imges/img1.jpg";
import { Similarypost } from "../../DATA/Similarypost";

const Similary = () => {
  return (
    <>
      <section className="similar-card">
        <div className="container">
          <div className="row">
            <h1>Similar Houses around DHA Phase 6</h1>
            {Similarypost.map((items) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Card style={{ width: "24.5rem" }}>
                    <Card.Img variant="top" src={items.img} />
                    <Card.Body>
                      <Card.Title>{items.price}</Card.Title>
                      <Card.Text>{items.des}</Card.Text>
                      <Card.Text>
                        <span>
                          <img src={bed} alt="" />3
                        </span>
                        <span>
                          <img src={bed} alt="" />3
                        </span>
                        <span>
                          <img src={bed} alt="" />3
                        </span>
                      </Card.Text>
                      <button className="btn btn-danger">Call</button>
                      <button className="btn btn-dark">Email</button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Similary;
