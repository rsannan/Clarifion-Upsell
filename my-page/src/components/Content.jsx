import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Content() {
  return (
    <Container className="content-container">
      <Row>
        <Col className="pt-4 text-center" xs={12}>
          <h1 className="heading">Wait ! your order in progress.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur </p>
        </Col>
        <Col xs={12}>
          <Row>
            <Col className="svg-text">
              <img src="/checked.svg" alt="checked image" />
              <p className="checktext">
                <span className="not-small-screen">Step 1: </span>Cart Review
              </p>
            </Col>
            <Col className="svg-text">
              <img src="/checked.svg" alt="checked image" />
              <p className="checktext">
                <span className="not-small-screen">Step 2: </span>Checkout
              </p>
            </Col>
            <Col className="svg-text">
              <img src="/3icon.svg" alt="3 icon image" />
              <p className="checktext sp">
                <span className="not-small-screen">Step 3: </span>Special Offer
              </p>
            </Col>
            <Col className="svg-text">
              <img src="/4icon.svg" alt="4 icon image" />
              <p className="checktext">
                <span className="not-small-screen">Step 4: </span>Confirmation
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <Row>
            <Col xs={12} className="text-center small-screen">
              <p className="fw-semibold span-p">
                <span>ONE TIME ONLY</span> special price for 6 extra Clarifion
                for only <span>$14 each</span> ($84.00 total!)
              </p>
            </Col>
            <Col xs={12} lg={6} className="pt-5">
              <Row>
                <Col xs={12}>
                  <div className="w-100">
                    <img
                      className="w-100"
                      src="/main-img1.png"
                      alt="main item image"
                    />
                  </div>
                </Col>
                <Col xs={12} className="not-small-screen py-5">
                  <img
                    src="/main-sub5.png"
                    alt="main item image"
                    className="w-100"
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={6}>
              <Row className="pt-5">
                <p className="fw-semibold span-p not-small-screen">
                  <span>ONE TIME ONLY</span> special price for 6 extra Clarifion
                  for only <span>$14 each</span> ($84.00 total!)
                </p>
                <Col xs={3} lg={3}>
                  <img
                    src="/main-img2.png"
                    alt="main item image"
                    className="main-img2"
                  />
                </Col>
                <Col xs={9} lg={8}>
                  <img
                    src="/Frame 12.png"
                    alt="main item image"
                    className="frame-12"
                  />
                  <p className=" main-2p pt-3 not-small-screen">
                    Simply plug a Clarifion into any standard outlet and replace
                    bulky, expensive air purifiers with a simple.
                  </p>
                </Col>
                <Col xs={12} lg={8}>
                  <p className="text-center main-2p pt-3 small-screen">
                    Simply plug a Clarifion into any standard outlet and replace
                    bulky, expensive air purifiers with a simple.
                  </p>
                </Col>
                <Col className="py-3 main-sub2" xs={12}>
                  <img src="/main-sub1.png" alt="main sub image" />
                </Col>
                <Col className="py-3 main-sub2" xs={12}>
                  <img src="/main-sub2.png" alt="main sub image" />
                </Col>
                <Col className="py-3 main-sub2" xs={12}>
                  <img src="/main-sub3.png" alt="main sub image" />
                </Col>
                <Col className="py-3 main-sub2" xs={12}>
                  <img src="/main-sub4.png" alt="main sub image" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Content;
