import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

function Hero(props) {
  return (
    <Jumbotron className="bg-white jumbo-tron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-3">
          <Col xs={12}>
            {props.title && (
              <h4 className="display-1 text-center font-weight-bold">
                {props.title}
              </h4>
            )}
            {props.subTitle && (
              <h3 className="display-4 mt-3 text-center font-weight-light">
                {props.subTitle}
              </h3>
            )}
            {props.text && (
              <h3 className="lead text-center font-weight-light justify-content-center m-auto mt-3 col-sm-8">
                {props.text}
              </h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
