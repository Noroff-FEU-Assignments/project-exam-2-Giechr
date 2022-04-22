import Heading from "../layout/Heading";
import Footer from "../layout/Footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



export default function Home() {
 return( <>
     

<Card className="bg-dark text-white text-center">
  <Card.Img src="https://dummyimage.com/1400x500/000/fff" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Lorem ipsum, lorem ipsum, lorem ipsum.. </Card.Title>
  </Card.ImgOverlay>
</Card>



  <Row className="text-center">
    <Col>1 Find a place to stay</Col>
    <Col>2 Fill out inqury form</Col>
    <Col>3 Get ready for your trip</Col>
  </Row>

  <Container>
<Stack direction="horizontal">
  <Form.Control className="me-auto" placeholder="Lorem ipsum..." /> {// This is the search form thingy 
}
  <Button variant="primary">Lorem</Button>
  </Stack>
  </Container>



<Container className="text-center"> This is the section where the results would be..</Container>


{// This is the info card section  
}

<Container className="text-center">
<Heading title="Did you know this about Bergen?" />
<Row xs={1} md={3} className="g-4">
  {Array.from({ length: 3 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="https://dummyimage.com/300x200/000/fff" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
           lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar
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