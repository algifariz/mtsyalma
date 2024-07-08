'use client'

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SolusiDigital = () => {
  return (
    <Container fluid className="py-5">
      <Container>
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <h1 className="display-5">Solusi Digital Kami</h1>
        </div>
        <Row className="g-4">
          {/* Team Member 1 */}
          <Col lg={4} md={6}>
            <Card className="team-item wow fadeInUp" data-wow-delay="0.1s">
              <a href="http://example.com/rdm" className="d-flex align-items-center team-link">
                <div className="team-icon">
                  <i className="fa fa-file-alt"></i>
                </div>
                <div className="team-content">
                  <h5>RDM</h5>
                  <span className="text-primary">Rapor Digital Madrasah</span>
                </div>
              </a>
            </Card>
          </Col>
          {/* Team Member 2 */}
          <Col lg={4} md={6}>
            <Card className="team-item wow fadeInUp" data-wow-delay="0.3s">
              <a href="http://example.com/e-learning" className="d-flex align-items-center team-link">
                <div className="team-icon">
                  <i className="fa fa-laptop-code"></i>
                </div>
                <div className="team-content">
                  <h5>E-Learning</h5>
                  <span className="text-primary">E-Learning</span>
                </div>
              </a>
            </Card>
          </Col>
          {/* Team Member 3 */}
          <Col lg={4} md={6}>
            <Card className="team-item wow fadeInUp" data-wow-delay="0.5s">
              <a href="http://example.com/e-perpus" className="d-flex align-items-center team-link">
                <div className="team-icon">
                  <i className="fa fa-book"></i>
                </div>
                <div className="team-content">
                  <h5>E-Perpus</h5>
                  <span className="text-primary">E-Perpus</span>
                </div>
              </a>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SolusiDigital;
