import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import logo from "../../assets/img/logo.png"

export default function Footer() {
  return (
 <Card className="bg-light text-dark text-center">


    <Row>
  <Col xs={6} md={4} > <Card.Img variant="top" 
      src={logo} 
        height="100"
        alt="Holidaze logo"
        className="img-fluid"/>
    </Col>

         <Col xs={12} md={8} >
    <p>lorem ipsum lorem ipsum</p>
    <p>Lorem ipsum lorem ipsum</p>
    <p>Lorem ipsum lorem ipsum</p>
    </Col>
  
  </Row>
 
</Card>
  );
}