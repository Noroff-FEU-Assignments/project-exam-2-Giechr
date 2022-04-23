import Heading from "../layout/Heading";
import Footer from "../layout/Footer";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

export default function Contact() {
return(
<>
<Container>

<Row xs={1} md={3} className="flex justify-content-md-center" >
<Form>
    <Heading title="Contact" /> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
     <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
    <Form.Control type="email" placeholder="Email" />
    </FloatingLabel>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
      <FloatingLabel controlId="floatingInput" label="text" className="mb-3">
    <Form.Control type="text" placeholder="text" />
    </FloatingLabel>
  </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicPassword">
<FloatingLabel controlId="floatingInput" label="text" className="mb-3">
    <Form.Control type="text" placeholder="text" />
    </FloatingLabel>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example text area</Form.Label>
    <Form.Control as="textarea"placeholder="text" rows={6} />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit

  </Button>

</Form>
</Row>
</Container>

<Footer/>

</>
);
}