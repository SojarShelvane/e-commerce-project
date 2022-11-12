import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Beds.css";
import WoodenBed1 from "../furnishing/bed images/Amazon Bed Images/WoodenBed1.jpg";
import Image1 from "../furnishing/bed images/MaroonBedImages/Image1.jpg";
import Sheesam1 from "../furnishing/bed images/SheesamBedImages/Sheesam1.jpg";
import Metal1 from "../furnishing/bed images/MetalBedImages/Metal1.jpg";
//import { useSelector } from "react-redux";

const Beds = () => {
  //const {users} = useSelector((state)=>state.userReducer);
  let bedImages = [
    {
      title: "Solimo Canes Engineered Wood King Bed ",
      path: Image1,
      description:
        " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Julius Upholstered Platform Bed ",
      path: WoodenBed1,
      description:
        " Some quick example text to build on the card title and make up the bulk of the card's content. ",
    },
    {
      title: "Arcadia Sheesham Solid Wood King Box Bed ",
      path: Sheesam1,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.  ",
    },
    {
      title: "FurnitureKraft Nancy Metal Queen Bed  ",
      path: Metal1,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content. ",
    },
    {
      title: "FurnitureKraft Nancy Metal Queen Bed  ",
      path: Metal1,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content. ",
    },
    {
      title: "FurnitureKraft Nancy Metal Queen Bed  ",
      path: Metal1,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content. ",
    },
    {
      title: "Arcadia Sheesham Solid Wood King Box Bed ",
      path: Sheesam1,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.  ",
    },
    {
      title: "FurnitureKraft Nancy Metal Queen Bed  ",
      path: Metal1,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content. ",
    },
  ];

  return (
    <div>
      {/* {JSON.stringify(users)} */}

      <Container className="pt-5 mt=5">
        <Row>
          {bedImages.map((ele) => {
            return (
              <Col sm={12} md={3} lg={3} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={ele.path} className="bedImage" />
                  <Card.Body>
                    <Card.Title>
                      {ele.title.length > 50
                        ? `${ele.title.substring(0, 50)}...`
                        : ele.title}
                    </Card.Title>

                    <Card.Text>
                      {ele.description.length > 80
                        ? `${ele.description.substring(0, 80)}...`
                        : ele.description}{" "}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Beds;
