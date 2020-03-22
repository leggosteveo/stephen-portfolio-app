import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Garrett Love",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        title: "Be Relentless",
        subTitle: "Projects that make a difference",
        text: "Checkout my projects below"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Let's Talk"
      }
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavBar className="border-bottom" bg="transparent" expand="lg">
            <NavBar.Brand>Stephen Tyler</NavBar.Brand>

            <NavBar.Toggle aria-controls="navbar-toggle" />
            <NavBar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </NavBar.Collapse>
          </NavBar>

          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            exact
            render={() => (
              <AboutPage
                title={this.state.about.title}
                subTitle={this.state.about.subTitle}
                text={this.state.about.text}
              />
            )}
          />
          <Route
            path="/contact"
            exact
            render={() => (
              <ContactPage
                title={this.state.contact.title}
                subTitle={this.state.contact.subTitle}
                text={this.state.contact.text}
              />
            )}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;