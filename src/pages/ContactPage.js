import React from "react";

import { Button, Form } from "react-bootstrap";

import Hero from "../components/Hero";
import Content from "../components/Content";
import axios from "axios";

class ContactPage extends React.Component {
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
      <div>
        <Hero title={this.props.title} />
        <Content>
          
        </Content>
      </div>
    );
  }
}

export default ContactPage;
