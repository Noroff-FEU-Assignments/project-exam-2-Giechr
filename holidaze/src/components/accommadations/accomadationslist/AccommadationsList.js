import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";
const url = BASE_URL + "/api/accommadations?populate=*";

export default function AccommodationList() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function getAccommodations() {
      try {
        const response = await axios.get(
         url
        );
        console.log("response", response.data.data);

        setAccommodations(response.data.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getAccommodations();
  
  }, []);

  if (loading) return <div>Loading accommodations...</div>;

  if (error) return <div>Error loading accommodations...</div>;

  return (
    <>
      <div className="mb-3 d-flex align-items-stretch card-section">
        <Row xs={1} md={3}>
          {accommodations.map((data) => {
            return (
              <Col key={data.id}>
                <Card className="text-center card-body d-flex flex-column">
                  <Card.Img
                    variant="top"
                    alt={data.attributes.name}
                    src={BASE_URL + data.attributes.img.data.attributes.url}
                  />
                  <Card.Body>
                    <Card.Title>{data.attributes.name}</Card.Title>
                    <Card.Text>{data.attributes.cardtext}</Card.Text>
                  </Card.Body>

                  <Link
                    className="btn btn-outline-dark btn-lg"
                    role="button"
                    to={"/accomadations/accommadationDetails/" + data.id}
                  >
                    Explore
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
