import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { useState } from 'react';
import DatePicker from 'sassy-datepicker';


export default function OffcanvasContact() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [visible, setVisible] = useState(false);
const [visible1, setVisible1] = useState(false);
const [date, setDate] = useState(new Date());
const [date1, setDate1] = useState(new Date());


const handleDateSelect = (newDate) => {setDate(newDate);setVisible(false);};
const handleDateSelect1 = (newDate1) => {setDate1(newDate1);setVisible1(false);};

const togglePicker = () => setVisible((v) => !v);
const togglePicker1 = () => setVisible1((v) => !v);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>Contact</Button>

<Offcanvas show={show} onHide={handleClose} placement={'end'}>
<Offcanvas.Header closeButton><Offcanvas.Title>Inquiry to the accommodator</Offcanvas.Title></Offcanvas.Header>

<Offcanvas.Body>      
<Form>
  <Form.Group className="mb-3" controlId="formBasicText">
 <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
    <Form.Control type="text" placeholder="Name" />
  </FloatingLabel>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
 <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
    <Form.Control type="email" placeholder="Email" />
  </FloatingLabel>
  </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicNumber">
 <FloatingLabel controlId="floatingInput" label="Mobile number" className="mb-3">
    <Form.Control type="integer" placeholder="Mobile number" />
    </FloatingLabel>
  </Form.Group>

<Form.Group className="d-grid flex justify-content-center">
<Button onClick={togglePicker} type="button" variant="primary" size="md">The date you wish to come visit us</Button>
<p className="inline text-center">{date.toDateString()}</p>
{visible ? (<DatePicker selected={date} onChange={handleDateSelect} minDate={date}/>) : null}
 
<Button onClick={togglePicker1} type="button" variant="primary" size="md">The date you want to leave us</Button>
<p className="inline text-center">{date1.toDateString()}</p>
{visible1 ? (<DatePicker selected={date1} onChange={handleDateSelect1} minDate={new Date()}/>) : null}
</Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea"placeholder="text" rows={6}/>
</Form.Group>

<Form.Group className="d-grid gap-2">
  <Button variant="primary" type="submit"  size="md" > Submit</Button>
</Form.Group>
</Form>

</Offcanvas.Body>
</Offcanvas>
</>
  );
}

