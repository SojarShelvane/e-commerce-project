import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Beds.css'
const Beds = () => {
    let bedImages=[
        {
           title: "Ray King Size Bed ",
           path: " ",
           description: " "
        },
        {
            title: "Julius Upholstered Platform Bed ",
            path: " ",
            description: " "
         },
         {
            title: "Arcadia Sheesham Solid Wood King Box Bed ",
            path: " ",
            description: " "
         },
         {
            title: "FurnitureKraft Nancy Metal Queen Bed  ",
            path: " ",
            description: " "
         },
    ]
  return (
    <div>
      <Container className="pt-5 mt=5">
        <Row>
          <Col sm={12} md={3} lg={3}> 
            <Card >
              <Card.Img variant="top" src="godrej1.jpg"  id="bedImage" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={3} lg={3}>
            <Card >
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61GnO+UavZL._SX679_.jpg"  id="bedImage" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={3} lg={3}> 
            <Card >
              <Card.Img variant="top" src="https://www.godrejinterio.com/imagestore/B2C/56101515SD00326/56101515SD00326_A2_803x602.jpg" id="bedImage" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={3} lg={3}>
            <Card >
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61GnO+UavZL._SX679_.jpg"  id="bedImage" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default Beds;
