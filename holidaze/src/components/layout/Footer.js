import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/img/logo.png";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Card className=" text-dark text-center footer">
      <Container>
        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <Col>
            <Card.Img
              variant="top"
              src={logo}
              alt="Holidaze logo"
              className="img-fluid"
            />
          </Col>

          <Col >
            <p>
              Holidaze is a school project and not a real company. This sites is
              part of a project exam
            </p>
            <p>Created by: Christoffer H. Giertsen @ Noroff</p>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
