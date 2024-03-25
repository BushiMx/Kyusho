// import kyushologo from '../../assets/kyusho_logo.webp'
// import cornlogo from '../../assets/corn_logo.webp'
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import foto from "../../assets/david_accion02.webp";
import listStyleImage from "../../assets/check-mark.webp";
import "../inicio/inicio.css";

const beneficios = [
  "Aprenderás a defenderte de manera práctica y efectiva.",
  "Las clases se basan en simulaciones de peligro real en la calle.",
  "Desarrollarás una mayor confianza en ti al saber que eres capaz de proteger a tus seres queridos.",
  "Mejorarás tus capacidades físicas, cómo fuerza y coordinación.",
  "Te convertirás en un experto en Kyusho Jutsu dándote mayores conocimientos y habilidades.",
  "Te unirás a una comunidad apasionadas por el Kyusho, creando nuevas amistades y pasando excelentes momentos.",
];

const caracteristicas = [
  "Enseñanza de técnicas de Kyusho Jutsu para una Defensa Personal efectiva.",
  "Enfoque en aprovechar tus habilidades naturales.",
  "Desarrollo de la capacidad para utilizar los puntos de presión para debilitar al agresor.",
  "Clases 90% prácticas.",
  "Instructores altamente capacitados y avalados internacinalmente.",
  "Entrenar en un ambiente amigable y seguro para todas las edades y habiliaddes.",
];

export const Inicio = () => {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col key={1}>
          <Card>
            <Card.Body>
              <Card.Title>
                <h1>Kyusho Jutsu</h1>
                <h2>
                  Aplicacion de los puntos de presion para la Defensa Personal{" "}
                </h2>
              </Card.Title>
              <Card.Text>
                Aprende a protegerte con tecnicas reales y practicas utilizando
                Kyusho Jutsu.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col key={2}>
          <Card>
            <Card.Img variant="top" src={foto} />
          </Card>
        </Col>

        <Card>
          <Card.Header>
            <h1>Beneficios</h1>
          </Card.Header>
          <ListGroup variant="flush">
            {beneficios.map((info, id) => {
              return (
                <ListGroup.Item key={id}>
                  <img src={listStyleImage} alt="Check" /> {info}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card>

        <Card>
          <Card.Header>
            <h1>Caracteristicas</h1>
          </Card.Header>
          <ListGroup variant="flush">
            {caracteristicas.map((info, id) => {
              return (
                <ListGroup.Item key={id}>
                  <img src={listStyleImage} alt="Check" /> {info}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card>
      </Row>

      {/* <section className='logos'>
                <img src={kyushologo} alt="Logo" />
                <img src={cornlogo} alt="Logo" />
            </section> */}
    </>
  );
};
