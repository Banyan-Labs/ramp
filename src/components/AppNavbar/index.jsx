import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const AppNavbar = ({ logo, logoSrc, name }) => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">
        {logo && (
          <img
            alt="logo"
            src={logoSrc}
            width="30px"
            height="30px"
            className="d-inline-block align-top"
          />
        )}
        {logo ? " " : null}
        {name}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="mobile-nav" />
        <Navbar.Collapse id="mobile-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
