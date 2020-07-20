import React from "react";
import { Col, Row, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FooterStyle } from "./Styles";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footContainer">
        <hr />
        <Container>
          <Row>
            <Col>
              <div className="myBrand">
                <img src={Logo} alt={Logo} />
              </div>
            </Col>
            <Col>
              <Link to="/" className="footLink ">
                Home
              </Link>
              <Link to="/about" className="footLink ">
                About
              </Link>
              <Link to="/contact" className="footLink ">
                Contact
              </Link>
            </Col>

            <Col>
              <Link to="/" className="footLink ">
                Terms
              </Link>
              <Link to="/about" className="footLink ">
                Privacy Polocy
              </Link>
              <Link to="/contact" className="footLink ">
                Sitemap
              </Link>
            </Col>

            <Col> Cravedu &copy; 2020</Col>
          </Row>
        </Container>
      </div>
    </FooterStyle>
  );
};

export default Footer;
