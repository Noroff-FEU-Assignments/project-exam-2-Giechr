import Heading from "../layout/Heading";
import Ingress from "../layout/Ingress";
import { Container } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Row } from "react-bootstrap";


export default function AdminPage() {
	return (
    <>
      <Container>
  
        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <Heading content="Admin" />
        </Row>
        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <Ingress content="This is where you can administer Holidaze" />
        </Row>
        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <ListGroup>
            <ListGroup.Item
              action
              variant="light"
              href="/admin/adminAccommodations"
            >
              Add/Edit/Delete accommodations
            </ListGroup.Item>
            <ListGroup.Item action variant="light" href="/admin/adminBookings">
              Read/Edit/Delete booking messages
            </ListGroup.Item>
            <ListGroup.Item action variant="light" href="/admin/adminMessages">
              Read/Edit/Delete contact us messages
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Container>
    </>
  );
}