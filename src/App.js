import './App.css';
import {Container,Nav,Navbar,Col,Row,Card,ProgressBar,ListGroup,Figure} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Element } from 'react-scroll'
import { useState, useEffect, React, useContext } from "react";
import { FaInstagram } from 'react-icons/fa';


function App() {
  const skills = ['Linux', 'MCU', 'Python', 'C', 'ROS', 'SolidWork', 'JavaScript', 'Docker'];
  const degrees = [90,80,100,70,80,60,70,80];
  return (
    <div>
      <Navbar fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="#home">FC</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <Link activeClass="active" className="Home" spy={true} to="Home" smooth={true} duration={500} ><Nav.Link>Home</Nav.Link></Link>
              <Link activeClass="active" className="Professional" to="Professional" spy={true} smooth={true} duration={500} ><Nav.Link>Professional</Nav.Link></Link>
              <Link activeClass="active" className="Contact" spy={true} to="Contact" smooth={true} duration={500} ><Nav.Link>Contact</Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Element name="Home" className="element full-height">
        <div style={{ height: "20%" }} />
        <Container className="">
          <h1>Hi, </h1>
          <h1>I'm Fisher Chan</h1>
          <span>
            A second-year graduate student in Biomechatronics at National Taiwan University.
          </span>
          <div className="mt-2"><Figure>
            <Figure.Image
              width={200}
              src="profile.jpg"
            />
          </Figure></div>
        </Container>
      </Element>
      <Element name="Professional" className="element full-height">
        <div style={{ height: "30%" }} />
        <Container className="">
          {skills.map((item, index) => (
            <Row key={index} className="my-2 fluid">
              <Col md={2}>{item}</Col>
              <Col md={8} className="align-self-center">
                <ProgressBar className="custom-progress-bar" now={degrees[index]} />
              </Col>
              <Col md={2}>{degrees[index]}(%)</Col>
            </Row>
          ))}
        </Container>
      </Element>
      <Element name="Contact" className="element full-height">
        <div style={{ height: "30%" }} />
        <Container className="h-50">
          <Row className="justify-content-center h-100">
          <Col md={8} className="d-flex contact-text flex-column">
            <div className="p4">
              <h3 className="d-flex justify-content-center mt-3">Contact: </h3>
            </div>
            <div className="p4 contact-text">
              <ListGroup variant="flush">
                <ListGroup.Item className="contact-text">email: r10631001@ntu.edu.tw</ListGroup.Item>
              </ListGroup>
            </div>
            <div className="p4 mt-auto">
              <Nav className="d-flex justify-content-center">
                <Nav.Link href="https://www.instagram.com/fisher33318/">
                  <FaInstagram style={{ color: "var(--c4)" }} size={24} />
                </Nav.Link>
              </Nav>
            </div>
          </Col>
          </Row>
        </Container>
      </Element>
    </div>
  );
}

export default App;
