import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="mt-5 bg-white">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            Stephen Tyler
          </Col>
          <Col className="p-0" md={3}>
            This site was made by Stephen Tyler
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
