import BackButton from "../../layout/BackButton";
import Heading from "../../layout/Heading";
import Ingress from "../../layout/Ingress";
import { Container } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Row } from "react-bootstrap";
import { BASE_URL } from "../../../constants/api";
import AuthContext from "../../../context/AuthContext";

const url = BASE_URL + "/api/bookings";

export default function AdminBookings() {
  const [bookings, setMessages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [auth] = useContext(AuthContext);

  useEffect(function () {
    async function getAccommodations() {
      try {
        const response = await axios.get(url,

            {
              headers: {
                Authorization: `Bearer ${auth}`,
              },
            }
          );
        console.log("response", response.data.data);
        setMessages(response.data.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getAccommodations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>Loading ...</div>;

  if (error) return <div>Error loading ...</div>;

  return (
    <>
      <Container>
        <BackButton />
        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <Heading content="Admin bookings" />
        </Row>
        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <Ingress content="" />
        </Row>

        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <ListGroup>
            {bookings.map((data) => {
              return (
                <ListGroup.Item
                  action
                  variant="light"
                  key={data.id}
                  href={"./adminBookings/readUpdateDeleteBooking/" + data.id}
                >
                  {data.attributes.name} @ {data.attributes.createdAt}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Row>
      </Container>
    </>
  );
}
