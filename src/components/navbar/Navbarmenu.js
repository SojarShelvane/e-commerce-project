import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import "E:/E-Commerce Project Development/shopping-website/fantasy-online-shopping/src/components/navbar/Navbarmenu.css";
import Fashion from "./Header/fashion/Fashion";
import Pages from "./Header/pagesHeader/Pages";
import Home from "./Header/home/Home";
import Usericon from "./Header/userIcon/Usericon";

const Navbarmenu = () => {
  return (
    <div className="bg-light ">
      <Row>
        <Col sm={9} xs={9} md={9} lg={9}>
          <Navbar collapseOnSelect expand="md" bg="light" variant="dark">
            <Container>
              <Navbar.Brand href="#" className="text-dark">
                Fantasy Project
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                className="bg-secondary"
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto ">
                  <NavDropdown title="Home" id="collasible-nav-dropdown">
                    <Home />
                  </NavDropdown>
                  <NavDropdown title="Fashion" id="navbarScrollingDropdown">
                    <Fashion />
                  </NavDropdown>
                  <NavDropdown title="Pages" id="navbarScrollingDropdown">
                    <Pages />
                  </NavDropdown>
                  <Nav.Link href="#">About</Nav.Link>
                  <Nav.Link href="#">Contact</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
        <Col sm={3} xs={3} md={3} lg={3} className="pt-3 bg-light ">
          <Row>
            <Col sm={3} xs={3} md={3} lg={3} className=" cart pr-4">
              <span className="cart-count-wrapper">
                <i className="fa fa-shopping-cart fa-lg icon30 text-dark ml-2 mr-2 "></i>
                <span className="cart-count">8</span>
              </span>
            </Col>
            <Col sm={3} xs={3} md={3} lg={3}>
             <Usericon />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Navbarmenu;
