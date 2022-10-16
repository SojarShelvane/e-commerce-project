import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";

const Navbarmenu = () => {
  return (
    <div className="bg-light ">
      <Row>
        <Col sm={9} xs={9} md={9} lg={9}>
          <Navbar collapseOnSelect expand="md" bg="light" variant="dark">
            <Container>
              <Navbar.Brand href="#" className="text-dark">
                Fantasy
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                className="bg-secondary"
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto ">
                  <NavDropdown title="Home" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action3">
                      Home Furnishings
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Living Room Furniture
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Kitchen And Dining
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Home Decor
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Fashion" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">
                      Men's Top Wear
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item href="#action4">
                      Men's Bottom Wear
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Women Ethenic
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item href="#action4">
                      Women Western
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Men Footwear
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Women Footwear
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Watches And Accessories
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">Kids</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Pages" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">
                      Wishlist
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item href="#action4">Cart</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Checkout
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item href="#action4">Account</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">Sign up</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">Sign in</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Forget Password
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Reset Password
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Privacy and Policy
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Comming Soon
                    </NavDropdown.Item>
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
        <Col sm={3} xs={3} md={3} lg={3} className="pt-3 bg-light">
          <Row>
            <Col sm={3} xs={3} md={3} lg={3}>
              <span className="cart-count-wrapper">
                <i className="fa fa-shopping-cart icon30 text-dark ml-2 mr-2 "></i>
                <span className="cart-count">8</span>
              </span>
            </Col>
            <Col sm={3} xs={3} md={3} lg={3}>
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle id="dropdown-custom-1">
                  <i className="fa fa-user icon30 text-dark ml-2 "></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Active Item
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Navbarmenu;
