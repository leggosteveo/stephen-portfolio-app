import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="mt-5 bg-white">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3}>
            &copy; Outlier Investments
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
