import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_FXOQdEcaoos_VNcuNfuAYU1zNoxrcLnd4Xt_xXUHEG6NGRT">
        <h1>Hi Im the creator of this app. my name is Jose LEyva</h1>

      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To The LOony Toons Click Game!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>Where the game begin to find and choose the right character to win!
            </p>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
