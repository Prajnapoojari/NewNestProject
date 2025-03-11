import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Badge } from "react-bootstrap";
import {
  FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope,
  FaClock, FaMapMarkerAlt, FaHeart, FaChild, FaHandHoldingHeart,
  FaPaperPlane
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from '../Assets/Admission.jpeg';
import "./Admission.css";

const Admission = () => {
  const [isHovered, setIsHovered] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    // Handle submission
    alert("Form submitted successfully!");
  };

  return (
    <div className="admission-page">
      <div className="floating-shapes">
        <div className="shape1"></div>
        <div className="shape2"></div>
        <div className="shape3"></div>
        <div className="shape4"></div>
        <div className="shape5"></div>
      </div>

      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={10} lg={8} className="text-center">
            <div className="page-title-wrapper">
              <Badge bg="danger" pill className="position-relative top-badge mb-3 pulse-animation">
                Changing Lives Together
              </Badge>
              <h1 className="display-4 fw-bold text-gradient mb-3 title-animation">
                <FaHandHoldingHeart className="text-danger me-2" /> Child Admission Program
              </h1>
              <div className="title-underline mx-auto"></div>
              <p className="lead text-muted mt-3 fade-in-animation">
                Providing hope and a future for children in need through our compassionate admission process
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-5">
          <Col lg={5}>
            <Card className="border-0 shadow-lg h-100 charity-info-card">
              <Card.Body className="p-4 position-relative">
                <div className="ribbon-corner"></div>
                <div className="corner-dots"></div>

                <h2 className="fw-bold mb-4 text-gradient">Share love, donate hope.</h2>
                <div
                  className="image-container"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div
                    style={{
                      minHeight: '35vh',
                      width: '100%',
                      backgroundImage: `url(${backgroundImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      borderRadius: '12px',
                      transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                      transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                      boxShadow: isHovered ? '0 12px 30px rgba(0,0,0,0.2)' : '0 5px 15px rgba(0,0,0,0.1)',
                    }}
                  />
                  {isHovered && (
                    <div className="image-overlay">
                      <FaChild size={50} className="text-white pulse-icon" />
                      <p className="overlay-text">Supporting Children's Futures</p>
                    </div>
                  )}
                </div>
                <p className="lead mb-4 mt-4 highlight-text glow-text">
                  Share love, donate hope, and transform lives through the child adoption process.
                </p>

                <div className="divider-gradient my-4"></div>

                <div className="contact-details">
                  <div className="contact-item hover-effect">
                    <div className="icon-wrapper">
                      <FaMapMarkerAlt className="text-primary icon-bounce" size={20} />
                    </div>
                    <p className="mb-0">
                      Flat 201, BVR Lake Front, 1/2, Kanaka-Nagar, Veeranamplaya, Nagavara, Bengaluru, Karnataka 560045
                    </p>
                  </div>

                  <div className="contact-item hover-effect">
                    <div className="icon-wrapper">
                      <FaPhone className="text-primary icon-bounce" size={20} />
                    </div>
                    <p className="mb-0">+91 7339552119</p>
                  </div>

                  <div className="contact-item hover-effect">
                    <div className="icon-wrapper">
                      <FaEnvelope className="text-primary icon-bounce" size={20} />
                    </div>
                    <p className="mb-0">charity@email.net</p>
                  </div>

                  <div className="contact-item hover-effect">
                    <div className="icon-wrapper">
                      <FaClock className="text-primary icon-bounce" size={20} />
                    </div>
                    <p className="mb-0">Mon-Fri: 8:00am - 6:00pm</p>
                  </div>
                </div>

                <div className="social-icons-wrapper">
                  <a href="#" className="social-icon-link social-hover">
                    <FaFacebook size={28} />
                  </a>
                  <a href="#" className="social-icon-link social-hover">
                    <FaTwitter size={28} />
                  </a>
                  <a href="#" className="social-icon-link social-hover">
                    <FaInstagram size={28} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={7}>
            <Card className="border-0 shadow-lg form-card h-100">
              <Card.Body className="p-4 p-lg-5">
                <h2 className="fw-bold mb-4 text-center text-gradient form-title">
                  Child Admission Form
                </h2>

                <Form className="form-container" style={{ minHeight: '400px' }}>
                  <Row className="fade-in h-100 justify-content-between">
                    <h4 className="mb-3">Child Information</h4>
                    <Col md={12}>
                      <Form.Group className="form-floating mb-4">
                        <Form.Control
                          type="text"
                          placeholder="Enter child's full name"
                          id="childName"
                          className="custom-input"
                        />
                        <label htmlFor="childName">Child's Full Name</label>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="form-floating mb-4">
                        <Form.Control
                          type="number"
                          placeholder="Enter age"
                          id="childAge"
                          className="custom-input"
                        />
                        <label htmlFor="childAge">Age</label>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="form-floating mb-4">
                        <Form.Select className="custom-input" id="childGender">
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Form.Select>
                        <label htmlFor="childGender">Gender</label>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group className="form-floating mb-4">
                        <Form.Control
                          as="textarea"
                          style={{ height: '100px' }}
                          placeholder="Enter any relevant medical information"
                          id="medicalHistory"
                          className="custom-input"
                        />
                        <label htmlFor="medicalHistory">Medical History</label>
                      </Form.Group>
                    </Col>

                    <div className="divider-gradient my-4"></div>
                    <h4 className="mb-3">Guardian Information</h4>

                    <Col md={6}>
                      <Form.Group className="form-floating mb-4">
                        <Form.Control
                          type="text"
                          placeholder="Enter guardian's name"
                          id="guardianName"
                          className="custom-input"
                        />
                        <label htmlFor="guardianName">Guardian's Name</label>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="form-floating mb-4">
                        <Form.Control
                          type="text"
                          placeholder="Enter guardian's contact"
                          id="guardianContact"
                          className="custom-input"
                        />
                        <label htmlFor="guardianContact">Guardian's Contact</label>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group className="form-floating mb-4">
                        <Form.Control
                          type="email"
                          placeholder="Enter guardian's email"
                          id="guardianEmail"
                          className="custom-input"
                        />
                        <label htmlFor="guardianEmail">Guardian's Email</label>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group className="form-floating mb-4">
                        <Form.Control
                          as="textarea"
                          style={{ height: '100px' }}
                          placeholder="Enter additional information"
                          id="additionalInfo"
                          className="custom-input"
                        />
                        <label htmlFor="additionalInfo">Additional Information</label>
                      </Form.Group>
                    </Col>

                    <Col md={12} className="mt-4">
                      <Button
                        onClick={submitForm}
                        className="w-100 py-3 fw-bold custom-button btn-shine"
                      >
                        Submit Admission Form <FaPaperPlane className="ms-2" />
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Admission;