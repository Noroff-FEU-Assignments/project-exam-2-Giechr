import { Row, Card, Col, Container } from "react-bootstrap";
import Heading from "./Heading";
import { BASE_URL } from "../../constants/api";
import { useEffect, useState } from "react";
import axios from "axios";

const url = BASE_URL + `/api/infocards?populate=*`;

export default function InfoCards() {
  const [info, setInfo] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  useEffect(function () {
    async function getinfo() {
      try {
        const response = await axios.get(url);
        console.log("response", response.data.data);

        setInfo(response.data.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getinfo();
  }, []);

  return (
    <Container className="text-center card-section">
      <Heading content="Did you know..." />

      <Row xs={1} md={3} className="g-4">
        {info.map((data) => {
          return (
            <Col key={data.id}>
              <Card>
                <Card.Img
                  variant="top"
                  alt={data.attributes.name}
                  src={BASE_URL + data.attributes.img.data.attributes.url}
                />
                <Card.Body>
                  <Card.Title>{data.attributes.name}</Card.Title>
                  <Card.Text>{data.attributes.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
