import React from "react";
import "../components/nosotros/nosotros.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import foto01 from "../assets/fotos/foto01.webp";
import foto02 from "../assets/fotos/foto02.webp";
import foto03 from "../assets/fotos/foto03.webp";
import foto04 from "../assets/fotos/foto04.webp";
import foto05 from "../assets/fotos/foto05.webp";
import foto06 from "../assets/fotos/foto06.webp";
import foto07 from "../assets/fotos/foto07.webp";
import foto08 from "../assets/fotos/foto08.webp";

const carrusel_fotos = [
  {
    Imagen: foto01,
    Titulo: "Máster Dr. Sergio Espejo",
    Texto: "2006, Seminario - CDMX, México",
  },
  {
    Imagen: foto02,
    Titulo: "",
    Texto: "2007, Seminario - Cd. Juárez, México",
  },
  {
    Imagen: foto03,
    Titulo: "GM Evan Pantazi",
    Texto:
      "2007, Convención Internacional Kyusho International - Barcelona, España",
  },
  {
    Imagen: foto04,
    Titulo: "GM Jim Corn",
    Texto:
      "2007, Convención Internacional Kyusho International - Barcelona, España",
  },
  {
    Imagen: foto05,
    Titulo: "GM Mark Kline",
    Texto:
      "2007, Convención Internacional Kyusho International - Barcelona, España",
  },
  {
    Imagen: foto06,
    Titulo: "GM Gary Rooks",
    Texto:
      "2007, Convención Internacional Kyusho International - Barcelona, España",
  },
  {
    Imagen: foto07,
    Titulo: "Instructores de Dian Xue México",
    Texto: "2022, Seminario International - CDMX, México",
  },
  {
    Imagen: foto08,
    Titulo: "",
    Texto: "2022, Seminario International - CDMX, México",
  },
];

const Nosotros = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <h1>Dian Xue Mexico</h1>
            <h2>
              Aplicacion de los puntos de presion para la Defensa Personal
            </h2>
          </Card.Title>
          <Card.Text>
            Hace casi 20 años se inició el entrenamiento de Kyusho en México, el
            Dr. Sergio Espejo (QEPD) fue quién abrió el primer grupo de estudio
            en Cd. Juárez, Chih. En la organización Kyusho International, de
            entre sus alumnos estaba David Escobar quién tuvo la oportunidad de
            entrenar y aprender de Maestros internacionales cómo: Evan Pantazi,
            Jim Corn, Fred Mastison, Gary Rooks , Mark Kline, Gary Boaz, Shawn
            Steiner y Asa Seeley entre otros y posteriormente abrió el primer
            grupo de estudio en CDMX en 2006 y quién ya contaba con el grado de
            Cinta Negra 2° Dan en Kempo Chino.
          </Card.Text>
          <Card.Text>
            De este grupo se graduaron los Instructores Genaro Watla e Yzar
            Cervantes con quienes en el año 2013 dejaron la organización para
            continuar con su entrenamiento directamente de la mano del Grand
            Máster Jim Corn y el Máster Fred Mastison, fundando Dian Xue México,
            con la finalidad de enseñar de manera profesional y real el Kyusho
            Jutsu con un enfoque práctico a la Defensa Personal y abierto a toda
            persona dispuesta a aprender.
          </Card.Text>
          <Card.Text>
            Desde entonces regularmente se llevan a cabo clases, actividades y
            seminarios con la presencia de los Maestros Corn y Mastison dando la
            oportunidad de certificar internacionalmente los conocimientos de lo
            afiliados a Dian Xue México.
          </Card.Text>
        </Card.Body>
      </Card>

      <Carousel>
        {carrusel_fotos.map((info, id) => {
          return (
            <Carousel.Item key={id}>
              <img src={info.Imagen} alt={info.Texto} />
              <Carousel.Caption>
                <h3>{info.Titulo}</h3>
                <p>{info.Texto}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        ;
      </Carousel>
    </>
  );
};

export default Nosotros;
