import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
function TNavbar() {
  return (
    <>
      <Navbar className="bg-nav">
        <Container>
          <div className="small-screen">
            <img src="/Vector1.svg" alt="left arrow" />
          </div>
          <div>
            <img src="/1.svg" alt="text" />
          </div>
          <div className="not-small-screen">
            <img src="/2.svg" alt="text" />
          </div>
          <div className="not-small-screen">
            <img src="/3.svg" alt="text" />
          </div>
          <div className="not-small-screen not-mid-screen">
            <img src="/4.svg" alt="text" />
          </div>
          <div className="small-screen">
            <img src="/Vector2.svg" alt="right arrow" />
          </div>
        </Container>
      </Navbar>
      <Navbar className="bg-nav-light">
        <Container>
          <div>
            <img src="/Clarifion_Logo 1.png" alt=" clarifion logo" />
          </div>
          <div className="sub-logos">
            <img src="/McAfee_Secure.png" alt="mcafee logo" />
            <img src="/norton-antivirus-logo 1.png" alt=" norton logo" />
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default TNavbar;
