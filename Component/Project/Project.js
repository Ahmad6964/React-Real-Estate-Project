import React from "react";
import "./Project.scss";
import { projectdata } from "../../DATA/Projectapi";
import { Card } from "react-bootstrap";
import p1 from "../../imges/img1.jpg";
import p2 from "../../imges/img2.jpg";
import p3 from "../../imges/img3.jpg";
import rent from "../../imges/icon-rent.png";
import sale from "../../imges/icon-sale.png";
import sold from "../../imges/icon-sold.png";
import arrow from "../../imges/arrow.png";
import ar from "../../imges/arrow-slide-right.png";
import Slider from "react-slick";
import { Decisiondata } from "../../DATA/DecisionCard";
const Project = () => {
  return (
    <>
      <div className="main-project">
        <div className="container">
          <h1>Discover New Projects</h1>
          <div className="row">
            {projectdata.map((items) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <Card className="Card-body" key={items.id}>
                    <Card.Img variant="top" src={items.img} />
                    <Card.Body>
                      <Card.Title>{items.title}</Card.Title>
                      <Card.Text>{items.des}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* second div */}
      <div className="main-decesion">
        <div className="container">
          <div className="project-row row">
            <h1>Make Better Decision</h1>
            {Decisiondata.map((items) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <Card className="Card-body" key={items.id}>
                    <Card.Img variant="top" src={items.img} />
                    <Card.Body className="text-center">
                      <Card.Title>{items.title}</Card.Title>
                      <Card.Text>{items.des}</Card.Text>
                      <Card.Link>
                        View Property For Sale
                        <span>
                          <img src={arrow} />
                        </span>
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
