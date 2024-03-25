import React from "react";
// import kyushologo from '../../assets/kyusho_logo.webp'
// import cornlogo from '../../assets/corn_logo.webp'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "../menu/menu.css";

const Menu = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Qué es Kyusho</Nav.Link>
              <Nav.Link href="#link">Nosotros</Nav.Link>
              <Nav.Link href="#link">Instructores</Nav.Link>
              <Nav.Link href="#link">Fotos</Nav.Link>
              <Nav.Link href="#link">Vídeo del mes</Nav.Link>
              <Nav.Link href="#link">Eventos</Nav.Link>
              <Nav.Link href="#link">Informacion</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
