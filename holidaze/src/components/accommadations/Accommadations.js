import Heading from "../layout/Heading";
import Footer from "../layout/Footer";
import Accommadationslist from "./accomadationslist/AccommadationsList"
import { Container, Row } from "react-bootstrap";
import Ingress from "../layout/Ingress";

export default function Accommadations() {
  return (
    <>
      <Container>
        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <Heading content="Accommodations" />
        </Row>
        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <Ingress content="This is all the accommodations we have available" />
        </Row>
        <Accommadationslist />
      </Container>
      <Footer />
    </>
  );
}
