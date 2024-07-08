'use client'

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelopeOpen, FaPhoneAlt } from 'react-icons/fa';

const PpdbSection = () => {
  return (
    <Container fluid className="py-5">
      <Container>
        <Row className="g-5">
          <Col lg={6}>
            <Row className="gx-3 h-100">
              <Col xs={6} className="align-self-start animate__animated animate__fadeInUp" style={{ animationDelay: '0.1s' }}>
                <img className="img-fluid image-hover" src="/img/download.jpg" alt="Image Description" />
              </Col>
              <Col xs={6} className="align-self-end animate__animated animate__fadeInDown" style={{ animationDelay: '0.1s' }}>
                <img className="img-fluid image-hover" src="/img/download.jpg" alt="Image Description" />
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="animate__animated animate__fadeIn" style={{ animationDelay: '0.5s' }}>
            <p className="fw-medium text-uppercase text-dark mb-2">PPDB</p>
            <h1 className="display-5 mb-4">Pendaftaran Telah Dibuka</h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
            </p>
            <Button href="https://forms.gle/KC6VvCKd9VA81CGU6" className="btn-custom animate__animated animate__slideInRight" style={{ animationDelay: '0.5s' }}>Daftar</Button>
            <div className="d-flex align-items-center mb-4"></div>
            <Row className="pt-2">
              <Col sm={6}>
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-blue">
                    <FaEnvelopeOpen className="text-white" />
                  </div>
                  <div className="ms-3">
                    <p className="mb-2">Email us</p>
                    <h5 className="mb-0">info@example.com</h5>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-blue">
                    <FaPhoneAlt className="text-white" />
                  </div>
                  <div className="ms-3">
                    <p className="mb-2">Call us</p>
                    <h5 className="mb-0">+012 345 6789</h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PpdbSection;
