import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import { useState } from 'react';


export default function OffcanvasContact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Contact
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Inquiry to the accommodator</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         


<Form>
  <Form.Group ClassName="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group ClassName="mb-3" controlId="formBasicPassword">
    <Form.Label>text</Form.Label>
    <Form.Control type="text" placeholder="text" />
  </Form.Group>

 <Form.Group ClassName="mb-3" controlId="formBasicPassword">
    <Form.Label>text</Form.Label>
    <Form.Control type="text" placeholder="text" />
  </Form.Group>

  <Form.Group ClassName="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example text area</Form.Label>
    <Form.Control as="textarea"placeholder="text" rows={6} />
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit

  </Button>

</Form>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

