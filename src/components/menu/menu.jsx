import React from "react";
import kyushologo from "../../assets/kyusho_logo.webp";
// import cornlogo from '../../assets/corn_logo.webp'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../menu/menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <img src={kyushologo} alt="Dian Xue Mexico" className="logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <ul>
                <Link to="/">Home</Link>
              </ul>
              <ul>
                <Link to="/kyusho">Qué es Kyusho</Link>
              </ul>
              <ul>
                <Link to="/nosotros">Nosotros</Link>
              </ul>
              <ul>
                <Link to="/instructores">Instructores</Link>
              </ul>
              <ul>
                <Link to="/fotos">Fotos</Link>
              </ul>
              <ul>
                <Link to="/video">Vídeo del mes</Link>
              </ul>
              <ul>
                <Link to="/eventos">Eventos</Link>
              </ul>
              <ul>
                <Link to="/informacion">Informacion</Link>
              </ul>
              {/* <Nav.Link to="#link">Informacion</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
