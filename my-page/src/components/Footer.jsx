import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Footer() {
  return (
    <div class="py-3 footer">
      <footer>
        <Row className="text-center">
          <Col xs={12} md={6}>
            <p className="footer-text">
              Copyright (c) 2023 <span className="px-2 fs-6">|</span>{" "}
              clarifionsupport@clarifion.com
            </p>
          </Col>
          <Col xs={12} md={6}>
            <p className="footer-text">
              <img className="pe-3" src="/lock.png" alt="footer lock image" />
              Secure 256-bit SSL encryption.
            </p>
          </Col>
        </Row>
      </footer>
    </div>
  );
}

export default Footer;
