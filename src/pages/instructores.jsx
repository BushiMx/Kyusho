import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import jim from "../assets/fotos/corn_perfil01.webp";
import fred from "../assets/fotos/fred_perfil01.webp";
import david from "../assets/fotos/david_perfil01.webp";
import genaro from "../assets/fotos/genaro_perfil01.webp";
import yzar from "../assets/fotos/yzar_perfil01.webp";
import jonathan from "../assets/fotos/jonathan_perfil01.webp";
import "../components/instructores/instructores.css";
import DetalleInst from "./detalleInst";

const Staff = [
  {
    Nombre: "GM Jim Corn",
    Foto: jim,
    Grado01: "10° Dan Kyusho Jutsu",
    Grado02: "9° Dan Ryukyu Kempo",
    Descripcion:
      "Jim Corn es el oficial ejecutivo de Force Options y supervisa las operaciones en el extranjero. El Sr. Corn sirvió como paracaidista del Ejército de los Estados Unidos y como oficial de policía. Además, es uno de los instructores de Kyusho Jitsu de más alto rango en el mundo. Viaja por todo el mundo enseñando el uso práctico de las técnicas de puntos de presión. Ha sido activo en la enseñanza de trabajos de puntos de presión y combativos durante casi cuatro décadas. Ha aparecido en numerosos DVD sobre el tema y es uno de los expertos más conocidos del mundo.",
    Video: "https://youtu.be/XNTmwLUmFuA",
    Telefono: "",
    Direccion: "",
    Localidad: "Petersburg, Indiana",
  },
  {
    Nombre: "Master Fred Mastison",
    Foto: fred,
    Grado01: "7° Dan Aikijitsu",
    Grado02: "5° Dan Kyusho Jutsu",
    Descripcion:
      "El Sr. Mastison es un instructor profesional en los campos de tácticas defensivas, armas de fuego y protección ejecutiva. Es un oficial de policía de reserva y ha estado entrenando en combates en cuartos cerrados durante más de tres décadas. Es reconocido internacionalmente como uno de los mejores combatientes e instructores de armas de fuego en el mundo. También opera una división de protección ejecutiva y brinda servicios en todo el mundo.",
    Video: "https://youtu.be/QZJyb9aE6is?si=6pPqM5SdMKXh25t3",
    Telefono: "",
    Direccion: "",
    Localidad: "Chandler, Arizona",
  },
  {
    Nombre: "Renshi David Escobar",
    Foto: david,
    Grado01: "5° Dan Kyusho Jutsu",
    Grado02: "3r Dan Ryukyu Kempo",
    Descripcion:
      "Comenzó a entrenar artes marciales en 1986, obtuvo la cinta Negra en Kenpo Chino en 1999, en el 2005 comenzó a entrenar Kyusho Jutsu con Renshi Dr. Sergio Espejo (Bendita sea su memoria) obteniendo el grado de cinta negra en el 2010 y abriendo la primer escuela en la CDMX desde el 2007. ",
    Video: "https://youtube.com/shorts/omWjzTtqZL8",
    Telefono: "5539771763",
    WhatsApp: "+525539771763",
    Direccion: "Cd. Del Sol",
    Localidad: "Querétaro, Qro.",
    Instagram: "https://www.instagram.com/defensapersonalqro",
    Tiktok: "https://www.tiktok.com/@davidescobarmx",
  },
  {
    Nombre: "Sensei Genaro Watla",
    Foto: genaro,
    Grado01: "3r Dan Kyusho Jutsu",
    Grado02: "",
    Descripcion: "",
    Video: "",
    Telefono: "",
    Direccion: "",
    Localidad: "CDMX, Benito Juárez",
  },
  {
    Nombre: "Sensei Yzar Cervantes",
    Foto: yzar,
    Grado01: "3r Dan Kyusho Jutsu",
    Grado02: "2° Dan Krav Maga",
    Descripcion: "",
    Video: "",
    Telefono: "",
    Direccion: "",
    Localidad: "CDMX, Coyoacán",
  },
  {
    Nombre: "Sensei Jonathan Santillan",
    Foto: jonathan,
    Grado01: "3r Dan Krav Maga",
    Grado02: "1r Dan Kyusho Jutsu",
    Descripcion: "",
    Video: "",
    Telefono: "",
    Direccion: "Sur 105-A Num. 604 Col. Sector Popular",
    Localidad: "CDMX, Iztapalapa",
  },
];

const Instructores = () => {
  const [mostrar, setMostrar] = useState(false);
  const [instructor, setInstructor] = useState("");

  function showInfo(info, idx) {
    // const instructor = { ...info };
    setInstructor(info);
    setMostrar(true);
    console.log(instructor);
  }

  return (
    <>
      <h3>Selecciona al instructor para ver más información.</h3>
      {/* <Row xs={1} md={3} className="container"> */}
      <Row xs={1} md={3}>
        {Staff.map((info, idx) => (
          <Col key={idx}>
            <Card
              style={{ width: "18rem" }}
              onClick={() => {
                showInfo(info, idx);
              }}
            >
              {/* <Card.Img variant="top" src={info.Foto} /> */}
              <img className="instructor_Pic" src={info.Foto} />
              <Card.Body>
                <Card.Title>{info.Nombre}</Card.Title>
                <Card.Text>{info.Grado01}</Card.Text>
                <Card.Text>{info.Grado02}</Card.Text>
                <Card.Text>
                  <strong>{info.Localidad}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <>
        {mostrar && (
          <DetalleInst
            datos={instructor}
            mostrar={mostrar}
            setMostrar={setMostrar}
          />
        )}
      </>
    </>
  );
};

export default Instructores;
