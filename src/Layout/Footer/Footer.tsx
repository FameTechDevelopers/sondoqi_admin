import SVG from "@/CommonComponent/SVG";
import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col
            md="12"
            className="footer-copyright d-flex flex-wrap align-items-center justify-content-between"
          >
            <p className="mb-0 f-w-600">
              Design and Developed by Fame Business Solutions, Copyright
              ©2021-2023 Fame Wheels (SMC-Pvt.) Ltd, All Rights Reserved.
            </p>
            {/* <p className="mb-0 f-w-600">Hand crafted &amp; made with
              <SVG className="footer-icon" iconId="footer-heart" />
            </p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
