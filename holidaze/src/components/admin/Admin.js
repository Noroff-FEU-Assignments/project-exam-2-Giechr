import Heading from "../layout/Heading";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row  from "react-bootstrap/Row"

export default function Contact() {
return(
<Container>
<Row xs={1} md={3} className="justify-content-md-center" >
  
<Form>
   <Heading title="Login" /> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>password</Form.Label>
    <Form.Control type="password" placeholder="Enter password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Row>
</Container>
);
}