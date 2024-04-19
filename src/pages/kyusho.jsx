import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import dibujo from "../assets/dibujo_acupuntura.webp";
import nervios from "../assets/nervios01.webp";
import nervios2 from "../assets/nervios02.webp";
import Infografia from "../assets/infografia.webp";
import "../components/kyusho/kyusho.css";

const Estudio = [
  {
    Nombre: "Kuatsu o Kappo 活法",
    Descripcion:
      "Es una metodología de primeros auxilios y reanimación encontrada en las artes marciales japonesas. La palabra kappo es una contracción de katsu (reanimación) y ho (método).",
  },
  {
    Nombre: "Mato 的",
    Descripcion:
      "Se les llama así a ciertas zonas vulnerables del cuerpo humano cuyo tamaño suele ser del tamaño del puño en donde se puede hacer daño aplicando cierta fuerza.",
  },
  {
    Nombre: "Kinsho 禁所",
    Descripcion:
      "Se le llama así a los puntos de presión localizados en los miembros tanto superiores como inferiores del cuerpo humano.",
  },
  {
    Nombre: "Kyusho 急所",
    Descripcion:
      "Se les llama así a los puntos de presión localizados en el dorso, cuello y cabeza del cuerpo humano.",
  },
  {
    Nombre: "Tuite 取手 (Kimide)",
    Descripcion:
      "Es una forma avanzada de agarre, manipulación conjunta, hiper extensiones y pausas que se ocultan dentro de los movimientos y principios del Kata.",
  },
  {
    Nombre: "Kiko 气功",
    Descripcion:
      "Es una terapia o conjunto de técnicas que se centran en el desarrollo de la propia energía interior.",
  },
  {
    Nombre: "Shizen 时针",
    Descripcion:
      "Es el estudio del ataque a los puntos de presión de acuerdo a la ‘Hora China’.",
  },
];

export const Kyusho = () => {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col key={1}>
          <Card>
            <Card.Body>
              <Card.Title>
                <h1>Que es el Kyusho Jutsu?</h1>
              </Card.Title>
              <Card.Text>
                El Kyusho-jutsu no es un estilo, es una técnica que se encuentra
                presente en todas las Artes Marciales tradicionales, se basa en
                un conocimiento profundo de las reacciones del cuerpo humano a
                los estímulos de los neurostransmisores corporales; en otras
                palabras, estudia la forma de atacar los puntos de Acupuntura
                del cuerpo humano de una manera eficaz, de tal manera que
                provoca desde una incapacitación temporal hasta pérdida de la
                conciencia con un mínimo esfuerzo.
              </Card.Text>
            </Card.Body>
            <Card.Footer>Conocimiento puro del cuerpo humano.</Card.Footer>
          </Card>
        </Col>
        <Col key={2}>
          <Card>
            {/* <Card.Img  variant="top" src={dibujo} /> */}
            <img className="info_img" src={dibujo} />
          </Card>
        </Col>

        <Card>
          {/* <Card.Img variant="top" src={nervios} /> */}
          <img className="info_img" src={nervios} />
        </Card>

        <Card>
          <Card.Body>
            <Card.Text>
              En la foto de la izquierda podemos ver el sistema nervioso
              (central y periférico) y darnos una idea de cómo esta conectado
              TODO el cuerpo.
            </Card.Text>
            <Card.Text>
              En Kyusho estudiamos la correcta estimulación de los nervios
              aferentes (foto abajo) para poder crear reacciones involuntarias
              en el agresor a través de una respuesta de los nervios eferentes.
            </Card.Text>
          </Card.Body>
          {/* <Card.Img variant="top" src={nervios2} /> */}
          <img className="info_img" src={nervios2} />
        </Card>
      </Row>

      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
        <Card.Body>
          <Card.Title>
            <h1>¿Qué estudia el Kyusho?</h1>
          </Card.Title>
          <Card.Text>
            <h2>
              El estudio del Kyusho-jutsu actual se divide en los siguientes
              apartados del Atemi-jutsu 当身術:
            </h2>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {Estudio.map((info, id) => {
            return (
              <ListGroup.Item key={id}>
                <strong>{info.Nombre}</strong> {info.Descripcion}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        <Card.Body>
          <Button variant="info" href={Infografia} size="lg">
            Descargar Infografia
          </Button>{" "}
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </>
  );
};
