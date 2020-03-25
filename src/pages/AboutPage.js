import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import { Carousel, Container } from "react-bootstrap";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content></Content>
    </div>
  );
}

export default AboutPage;
