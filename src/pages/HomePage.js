import React from "react";
import Hero from "../components/Hero";
import { Button, Carousel, Container, Form } from "react-bootstrap";
import axios from "axios";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null
    };
  }

  handleChange = event => {
    console.log(event);

    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      disabled: true
    });

    axios
      .post("/api/email", this.state)
      .then(res => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false
          });
        }
      })
      .catch(err => {
        this.setState({
          disabled: false,
          emailSent: false
        });
      });
  };

  render() {
    return (
      <div className="">
        <Hero
          title={this.props.title}
          subTitle={this.props.subTitle}
          text={this.props.text}
        />

        <Carousel>
          <Carousel.Item>
            <img src="img/Entertainment.jpeg" className="carousel-image"/>
            <Carousel.Caption>
              <h3 className="text-center">Entertainment</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="img/Stocks.jpg" className="carousel-image"/>
            <Carousel.Caption>
              <h3 className="text-center">Stocks</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="img/Real Estate.jpg" className="carousel-image"/>
            <Carousel.Caption>
              <h3 className="text-center">Real Estate</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h1 className="text-center text-white mt-5">Contact Us</h1>
        <Form
          onSubmit={this.handleSubmit}
          className="bg-black p-4 text-center"
          id="contact"
        >
          <Container className="col-md-6">
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="3"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button
              className="d-inline-block"
              varian="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              Send
            </Button>

            {this.state.emailSent === true && (
              <p className="d-line success-msg"> Email Sent!</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-line error-msg"> Email Not Sent!</p>
            )}
          </Container>
        </Form>
      </div>
    );
  }
}

export default HomePage;
