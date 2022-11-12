import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css"
//import ContactForm  from "../contact/ConatctForm";
//import ContactForm from "../contact/ConatctForm"
//import { useFormik } from "formik"
const Contact = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={6} md={6} lg={6} className="contactUs mr-5">
            <h4>Contact Info</h4>
            <br />
            <Row >
              <Col sm={4} md={4} lg={4} className="font-weight-bolder">
              <b>Phone</b>
              </Col>
              <Col sm={8} md={8} lg={8}>
                +012 445 674 102
                <br /> +012 445 674 102
              </Col>
            </Row>

            <br />

            <Row>
              <Col sm={4} md={4} lg={4}>
              <b>Email:</b>
              </Col>
              <Col sm={8} md={8} lg={8}>
                fantasycarecentre@gmail.com
                <br />
                fantasyhelpcentre@yahoo.com
              </Col>
            </Row>

            <br />
            <Row>
              <Col sm={4} md={4} lg={4}>
              <b>Address:</b>
              </Col>
              <Col sm={8} md={8} lg={8}>
                Mumbai-Pune Highway,
                <br />
                Banganga Society124, Mumbai
              </Col>
            </Row>
          </Col>

          <Col sm={5} md={5} lg={5} className="contactUs">
            <h4>Get In Touch</h4>
            <br />


            <Form >
              <Form.Group className="mb-3">
                <Row>
                  <Col sm={6} md={6} lg={6}>
                    <Form.Label><b> First Name</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name"required />
                  </Col>

                  <Col sm={6} md={6} lg={6}>
                    <Form.Label><b> Last Name</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name"  required/>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label><b>Subject</b></Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name"  required/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label><b>Message</b></Form.Label>
                <Form.Control as="textarea" rows={3}  required/>
              </Form.Group>
              <Button variant="primary" type="submit">
              <b>Send Message</b>
              </Button>
            </Form>
            {/* <ContactForm/> */}

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
