import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
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
        title: "Create Opporunities",
        subTitle: "About",
        text:
          "Outlier investments assist in the execution of high return opportunities, providing capital to well tested events and yielding desirable returns to our members."
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
          <Navbar
            className="border-bottom bg-primary navbar-dark"
            expand="lg"
          >
            <Navbar.Brand className="font-weight-bolder text-white">
              Outlier Investment Group
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto text-white">
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
            </Navbar.Collapse>
          </Navbar>

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
