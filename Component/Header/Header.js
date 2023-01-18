import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import logo from "../../imges/logo.png";
import "./header.scss";

const Header = () => {
  return (
    <>
      <header id="site-header" className="fixed-top"  >
        <Navbar expand="lg">
          <Container className="header-container">
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto m-auto navlink">
                <Nav.Link>
                  <NavLink to="/">Buy</NavLink>
                </Nav.Link>
                <Nav.Link href="#">Rent</Nav.Link>
                <Nav.Link href="#">Sold</Nav.Link>
                <Nav.Link href="#">New Home</Nav.Link>
                <Nav.Link href="#">Polots</Nav.Link>
                <Nav.Link href="#">New Projects</Nav.Link>
              </Nav>
              <div className="header-btn">
              <NavLink to="/singup"><Button className="btn1">Signup</Button></NavLink>
            <Button className="btn2">Login</Button>
            </div>
            </Navbar.Collapse>
            
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
