import BackButton from "../../layout/BackButton";
import Heading from "../../layout/Heading";
import Ingress from "../../layout/Ingress";
import { Container } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { BASE_URL } from "../../../constants/api";
import AuthContext from "../../../context/AuthContext"

const url = BASE_URL + `/api/accommadations`;

export default function AdminAccommodations() {
  const [accommodations, setAccommodations] = useState(null);
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

  if (loading) return <div>Loading ...</div>;

  if (error) return <div>Error loading ...</div>;

  return (
    <>
      <Container>
        <BackButton />
        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <Heading content="Admin Accommodations" />
        </Row>
        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <Ingress content="Create new, edit, update or delete accommodations" />
        </Row>
   
        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <ListGroup>
        
              <Link
                className="btn btn-outline-dark btn-lg"
                role="button"
                to="./adminAccommadations/createAcc"
              >
                Create new accommodation
              </Link>
          

            {accommodations.map((data) => {
              return (
                <ListGroup.Item
                  action
                  variant="light"
                  key={data.id}
                  href={"./adminAccommadations/crudAcc/" + data.id}
                >
                  {data.attributes.name}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Row>
      </Container>
    </>
  );
}
