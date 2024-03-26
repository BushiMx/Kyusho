import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import foto from "../../assets/fotos/perfil.webp";
import jim from "../../assets/fotos/corn_perfil01.webp";
import fred from "../../assets/fotos/fred_perfil01.webp";
import david from "../../assets/fotos/david_perfil01.webp";
import genaro from "../../assets/fotos/genaro_perfil01.webp";
import yzar from "../../assets/fotos/yzar_perfil01.webp";
import jonathan from "../../assets/fotos/jonathan_perfil01.webp";
import "./instructores.css";

const Staff = [
  {
    Nombre: "GM Jim Corn",
    Foto: jim,
    Grado01: "10° Dan Kyusho Jutsu ",
    Grado02: "9° Dan Ryukyu Kempo",
  },
  {
    Nombre: "Master Fred Mastison",
    Foto: fred,
    Grado01: "7° Dan Aikijitsu",
    Grado02: "5° Dan Kyusho Jutsu",
  },
  {
    Nombre: "Renshi David Escobar",
    Foto: david,
    Grado01: "5° Dan Kyusho Jutsu",
    Grado02: "3r Dan Ryukyu Kempo",
  },
  {
    Nombre: "Sensei Genaro Watla",
    Foto: genaro,
    Grado01: "3r Dan Kyusho Jutsu",
    Grado02: "",
  },
  {
    Nombre: "Sensei Yzar Cervantes",
    Foto: yzar,
    Grado01: "3r Dan Kyusho Jutsu",
    Grado02: "2° Dan Krav Maga",
  },
  {
    Nombre: "Sensei Jonathan Santillan",
    Foto: jonathan,
    Grado01: "3r Dan Krav Maga",
    Grado02: "1r Dan Kyusho Jutsu",
  },
];

const Instructores = () => {
  return (
    <>
      <Row xs={1} md={3} className="g-4 container">
        {/* {Array.from({ length: 6 }).map((_, idx) => ( */}
        {Staff.map((info, idx) => (
          <Col key={idx}>
            <Card>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <img src={info.Foto} alt="foto" />
                  <Accordion.Header>{info.Nombre}</Accordion.Header>
                  {/* <Accordion.Header>{info.Nombre}</Accordion.Header> */}
                  <Accordion.Body>{info.Grado01}</Accordion.Body>
                  <Accordion.Body>{info.Grado02}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {/* <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body> */}
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Instructores;
