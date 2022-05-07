import ContactForm from "./ContactForm";
import Footer from "../layout/Footer"
import Ingress from "../layout/Ingress"
import Heading from "../layout/Heading"
import { Row } from "react-bootstrap";

export default function ContactPage() {
	return (
    <>
 
          <Row xs={1} md={2} className="justify-content-md-center text-center">
          <Heading content="Contact Us" />
        </Row>
        <Row xs={1} md={2} className="justify-content-md-center text-center">
          <Ingress content="Write us a message" />
        </Row>
        <Row xs={1} md={2} className="justify-content-md-center text-center"></Row>
      <ContactForm />
      <Footer />
    </>
  );
}
