import {Row, Card, Col, Container} from "react-bootstrap"
import Heading from "./Heading";

export default function AdventureCards() {
  return (
    <Container className="text-center card-section">
      <Heading content="Adventures and activities in Bergen.." />

      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src="https://dummyimage.com/300x200/000/fff"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  lorem ipsum dolar tollar fjollar lorem ipsum dolar tollar
                  fjollar lorem ipsum dolar tollar fjollar lorem ipsum dolar
                  tollar fjollar lorem ipsum dolar tollar fjollar lorem ipsum
                  dolar tollar fjollar lorem ipsum dolar tollar fjollar lorem
                  ipsum dolar tollar fjollar lorem ipsum dolar tollar fjollar
                  lorem ipsum dolar tollar fjollar
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
