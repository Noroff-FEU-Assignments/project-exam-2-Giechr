import Heading from "../../layout/Heading";
import Footer from "../../layout/Footer";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/esm/Container";
import OffcanvasContact from "../../layout/ContactModal";

export default function About() {
 return (
  <>

   <Container>
 <Row>
    <Col>
    <p>Back button - arrow</p>
    </Col>
 </Row>

 <Row  xs={1} md={2}>
    <Col> <Card.Img variant="top" src="https://dummyimage.com/1000x700/000/fff" /></Col>   
<Col>
  <Heading title="Lorem ipsum" />
<table className="table table-borderless">
   <tbody>
    <tr>
      <th scope="col">Price range</th>
      <td >$$$$ - $$$$</td>
    </tr>
    <tr>
      <th scope="row">Guests</th>
      <td>XX - XX</td>
    </tr>
     <tr>
      <th scope="row">Holidaze rating</th>
      <td>XXXXX</td>
    </tr>
     <tr>
      <th scope="row">Wifi</th>
      <td>Checkmark</td>
    </tr>
  </tbody>
</table>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <OffcanvasContact/>
</Col>
</Row>
</Container>

<Container className="text-center" >
<Row >
<Heading title="Adventures and activities in Bergen.."  />
</Row>
<Row xs={1} md={3}>
  {Array.from({ length: 3 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="https://dummyimage.com/300x300/000/fff" />
        <Card.Body>
          <Card.Title>Lorem ipsum</Card.Title>
          <Card.Text>
            lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
</Container>
<Footer/>
  </>
 );
}