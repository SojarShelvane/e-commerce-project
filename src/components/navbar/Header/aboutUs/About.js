import React from "react";
import { Container, Row, Col, Image, Nav, Card } from "react-bootstrap";
//import missionImage2 from "./aboutImages/missionImage2"
import "./About.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import womenPurse_1_optimized from "./aboutImages/womenPurse_1_optimized.jpg";
import watch from "./aboutImages/watch.jpg";
import goggle from "./aboutImages/goggle.jpg";
//import { useSelector } from "react-redux";
const About = () => {
  //const {userDtl} = useSelector((state)=>state.userReducer);
  let AboutImages = [
    {
      path: womenPurse_1_optimized,
      mainheading: "Plo Bags",
      subheading: " Starting at Rs.299",
    },
    {
      path: watch,
      mainheading: "Plo Bags",
      subheading: " Starting at Rs.299",
    },

    {
      path: goggle,
      mainheading: "Plo Bags",
      subheading: " Starting at Rs.299",
    },
  ];
  return (
    <div>
      <Container>
        {/* <Row>
          <Col>
            <h2 className="d-flex">Our Stores</h2>
            <p className="text-justify">
              Fantasy is india's leading e-commerce marketplace with over
              millions of products acoross millions of categories E-commerce is
              revolutionizing the way we all shop in India. Why do you want to
              hop from one store to another in search of the latest phone when
              you can find it on the Internet in a single click? Not only
              mobiles. Fantasy houses everything you can possibly imagine, from
              trending electronics like laptops, tablets, smartphones, and
              mobile accessories to in-vogue fashion staples like shoes,
              clothing and lifestyle accessories; from modern furniture like
              sofa sets, dining tables, and wardrobes to appliances that make
              your life easy like washing machines, TVs, ACs, mixer grinder
              juicers and other time-saving kitchen and small appliances; from
              home furnishings like cushion covers, mattresses and bedsheets to
              toys and musical instruments, we got them all covered. You name
              it, and you can stay assured about finding them all here. For
              those of you with erratic working hours, Fantasy is your best bet.
              Shop in your PJs, at night or in the wee hours of the morning.
              This e-commerce never shuts down.
              <br/>
            </p>
              
              <h5 className="d-flex">Home and Furniture</h5>
              <p className="text-justify">
                Moving to a new place is never easy, especially if you're buying
                new furniture. Beds, sofa sets, dining tables, wardrobes, and TV
                units - it's not easy to set up everything again. With the
                hundreds of options thrown at you, the ride could be
                overwhelming. What place is reliable, what furniture will stand
                the test of time? These are questions you must ask before you
                choose a store. Well, our Durability Certified Furniture Store
                has not only curated a range of furniture keeping in mind the
                modern Indian consumer but furniture that comes with a lab
                certification, ensuring they last you for up to 10 years. Yes,
                all our furniture has gone through 35 stability and load tests
                so that you receive only the best-quality furniture. Be
                FurniSure, always. Names to look out for are Nilkamal, Godrej
                Interio, Urban Ladder, HomeTown, Durian and Perfect Homes.</p>
                <br/>
                <h5 className="d-flex">Lifestyle</h5>
                <p className="text-justify">
                  
                  fashion destination for anything and everything you need to
                  look good. Our exhaustive range of Western and Indian wear,
                  summer and winter clothing, formal and casual footwear, bridal
                  and artificial jewellery, long-lasting make-up, grooming tools
                  and accessories are sure to sweep you off your feet. Shop from
                  crowd favourites like Vero Moda, Forever 21, Only, Arrow,
                  Woodland, Nike, Puma, Revlon, Mac, and Sephora among dozens of
                  other top-of-the-ladder names. From summer staple maxi
                  dresses, no-nonsense cigarette pants, traditional Bandhani
                  kurtis to street-smart biker jackets, you can rely on us for a
                  wardrobe that is up to date. Explore our in-house brands like
                  Metronaut, Anmi, and Denizen, to name a few, for carefully
                  curated designs that are the talk of the town. Get ready to be
                  spoiled for choice.Festivals, office get-togethers, weddings,
                  brunches, or nightwear - Flipkart will have your back each
                  time.
                </p>
              
            
          </Col>
        </Row>

        <Row>
          <Col sm={12} xs={12} md={12} lg={6} xl={6}>
            <Image src={missionImage2} className="missionImage w-100 py-3"/>
          </Col>
          <Col sm={12} xs={12} md={12} lg={6} xl={6}>
            
            <h2 >Our Mission</h2>
            <p className="text-justify"><b>As a global e-commerce site, we aim to consider the values of
                our customer and help to establish a bond between your brand and
                our consumers, to reach consumers all over the world and create
                a positive value for our consumers. </b>
            </p>
            <p className="text-justify">
              By connecting people and products from both multinational
              suppliers and small local businesses, we strive to deliver
              opportunities for all people, regardless of their location, from
              the remotest settlements to the capital, with our technology,
              logistics and innovation. We strengthen connections between
              customers and local businesses that stimulate the economy of
              businesses and open doors to entrepreneurs. We aim to enable all
              people, including those in the most remote parts of the country,
              to improve their daily lives and have access to modern
              conveniences.
            </p>
          </Col>
        </Row> */}
      </Container>
      <Container>
        <Row>
          {/*  <div className="heading text-center">
      <h5>Who are we</h5>
      <h1 className="heading d-inline">Welcome to Fantasy</h1>
      </div> */}
          <Col>
            <div className="heading text-center">
              <h5>Who are we</h5>
              {/* {JSON.stringify(userDtl)} */}
              <h1 className="heading d-inline">Welcome to Fantasy</h1>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <p className="text-justify">
              Fantasy is india's leading e-commerce marketplace with over
              millions of products acoross millions of categories E-commerce is
              revolutionizing the way we all shop in India. Why do you want to
              hop from one store to another in search of the latest phone when
              you can find it on the Internet in a single click? Not only
              mobiles. Fantasy houses everything you can possibly imagine, from
              trending electronics like laptops, tablets, smartphones, and
              mobile accessories to in-vogue fashion staples like shoes,
              clothing and lifestyle accessories; from modern furniture like
              sofa sets, dining tables, and wardrobes to appliances that make
              your life easy like washing machines, TVs, ACs, mixer grinder
              juicers and other time-saving kitchen and small appliances; from
              home furnishings like cushion covers, mattresses and bedsheets to
              toys and musical instruments, we got them all covered. You name
              it, and you can stay assured about finding them all here. For
              those of you with erratic working hours, Fantasy is your best bet.
              Shop in your PJs, at night or in the wee hours of the morning.
              This e-commerce never shuts down.
              <br />
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="pb-5">
        <Row>
          {AboutImages.map((ele) => {
            return (
              <Col lg={4}>
                {/* <div className="single-banner">
                <Nav.Link>
                  <Image src={ele.path} />
                <div className="banner-content">
                   <h3 className="womenAccessories">{ele.mainheading}</h3> 
                   <h4 className="womenpurse">{ele.subheading}</h4>
                   <Nav.Link ><i className="fa fa-long-arrow-right arrowIcon"></i></Nav.Link>
                </div>
                </Nav.Link>
              </div> */}
                <Nav.Link>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={ele.path}
                      className="single-banner"
                    />
                    <Card.Body className="text-center">
                      <Card.Title>{ele.mainheading}</Card.Title>

                      <h4 className="womenpurse">{ele.subheading}</h4>

                      <Nav.Link className="arrow">
                        <i className="fa fa-long-arrow-right arrowIcon"></i>
                      </Nav.Link>
                    </Card.Body>
                  </Card>
                </Nav.Link>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <h2> Our Mission</h2>
            <p className="text-justify">
              {" "}
              By connecting people and products from both multinational
              suppliers and small local businesses, we strive to deliver
              opportunities for all people, regardless of their location, from
              the remotest settlements to the capital, with our technology,
              logistics and innovation. We strengthen connections between
              customers and local businesses that stimulate the economy of
              businesses and open doors to entrepreneurs. We aim to enable all
              people, including those in the most remote parts of the country,
              to improve their daily lives and have access to modern
              conveniences.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2> Our Vision</h2>
            <p>
              Fantasy houses everything you can possibly imagine, from trending
              electronics like laptops, tablets, smartphones, and mobile
              accessories to in-vogue fashion staples like shoes, clothing and
              lifestyle accessories; from modern furniture like sofa sets,
              dining tables, and wardrobes to appliances that make your life
              easy like washing machines, TVs, ACs, mixer grinder juicers and
              other time-saving kitchen and small appliances; from home
              furnishings like cushion covers, mattresses and bedsheets to toys
              and musical instruments, we got them all covered. You name it, and
              you can stay assured about finding them all here. For those of you
              with erratic working hours, Fantasy is your best bet. Shop in your
              PJs, at night or in the wee hours of the morning. This e-commerce
              never shuts down.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Our Goal </h2>
            <p className="text-justify">
              As a global e-commerce site, we aim to consider the values of our
              customer and help to establish a bond between your brand and our
              consumers, to reach consumers all over the world and create a
              positive value for our consumers.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
