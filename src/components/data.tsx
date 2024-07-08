'use client'

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { FaUniversity, FaUsersCog, FaUsers, FaGraduationCap } from 'react-icons/fa';

const FactsSection = () => {
  return (
    <Container fluid className="facts my-5 p-5 bg-blue">
      <Row className="g-5">
        <Col md={6} xl={3} className="wow fadeIn" data-wow-delay="0.1s">
          <div className="text-center border p-5">
            <FaUniversity className="fa-3x text-white mb-3" />
            <h1 className="display-2 text-white mb-0" data-toggle="counter-up">9</h1>
            <span className="fs-5 fw-semi-bold text-white">Ruangan</span>
          </div>
        </Col>
        <Col md={6} xl={3} className="wow fadeIn" data-wow-delay="0.7s">
          <div className="text-center border p-5">
            <FaUsersCog className="fa-3x text-white mb-3" />
            <h1 className="display-2 text-white mb-0" data-toggle="counter-up">50</h1>
            <span className="fs-5 fw-semi-bold text-white">Guru Dan Staf</span>
          </div>
        </Col>
        <Col md={6} xl={3} className="wow fadeIn" data-wow-delay="0.9s">
          <div className="text-center border p-5">
            <FaUsers className="fa-3x text-white mb-3" />
            <h1 className="display-2 text-white mb-0" data-toggle="counter-up">957</h1>
            <span className="fs-5 fw-semi-bold text-white">Siswa Dan Siswi</span>
          </div>
        </Col>
        <Col md={6} xl={3} className="wow fadeIn" data-wow-delay="1.1s">
          <div className="text-center border p-5">
            <FaGraduationCap className="fa-3x text-white mb-3" />
            <h1 className="display-2 text-white mb-0" data-toggle="counter-up">100</h1>
            <span className="fs-5 fw-semi-bold text-white">Lulusan Tahun 2024</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FactsSection;
