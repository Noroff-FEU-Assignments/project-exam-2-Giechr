import Heading from "../../layout/Heading";
import Footer from "../../layout/Footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"



export default function Accommadations() {
 return (  <>

 <Container> 
  <Heading title="Accommadations" />
 <p>This is all the accommadations we have available</p>


<Row xs={1} md={3} >
  {Array.from({ length: 3 }).map((_, idx) => (
    <Col>
      <Card className="text-center">
        <Card.Img variant="top" src="https://dummyimage.com/300x200/000/fff" />
        <Card.Body>
          <Card.Title>Lorem Ipsum</Card.Title>
          <Card.Text>
         lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar
          </Card.Text>
        </Card.Body>

  <Button variant="primary" type="submit">
    Explore

  </Button>
      </Card>
    </Col>
  ))}
</Row>
</Container>
<Footer/>
 </>
);
}