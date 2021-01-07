import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./MyNavbar.css";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar expand="md" bg="custom" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/tvshows">TV Shows</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar;
