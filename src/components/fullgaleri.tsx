'use client'

import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';



const GalleryFull = () => {
  return (
    <div className="container-custom">
      <h1 className="text-center text-dark mb-4">Galeri MTs AL-MA&apos;ARIJ</h1>
      <Row className="g-4">
        {/* Card 1 */}
        <Col md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="/img/GOY02107 (Copy).JPG" alt="Ahmad Syamsuri" />
            <Card.Body className="text-center">
              <Card.Title>Ahmad Syamsuri, S.Pd.</Card.Title>
              <Card.Text className="text-muted">tanggal 04/07/2024</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 2 */}
        <Col md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="/img/project-1.jpg" alt="Siti Hajar" />
            <Card.Body className="text-center">
              <Card.Title>Siti Hajar, S.Ag.</Card.Title>
              <Card.Text className="text-muted">tanggal 04/07/2024</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 3 */}
        <Col md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="/img/project-5.jpg" alt="Fatimah Zahra" />
            <Card.Body className="text-center">
              <Card.Title>Fatimah Zahra, M.Pd.</Card.Title>
              <Card.Text className="text-muted">tanggal 04/07/2024</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 4 */}
        <Col md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="/img/project-2.jpg" alt="Muhammad Ilham" />
            <Card.Body className="text-center">
              <Card.Title>Muhammad Ilham, S.Pd.I.</Card.Title>
              <Card.Text className="text-muted">tanggal 04/07/2024</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 5 */}
        <Col md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="/img/project-3.jpg" alt="Nurul Hidayah" />
            <Card.Body className="text-center">
              <Card.Text className="text-muted">tanggal 04/07/2024</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 6 */}
        <Col md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="/img/project-4.jpg" alt="Rizal Fahmi" />
            <Card.Body className="text-center">
              <Card.Title>Rizal Fahmi, S.Kom.</Card.Title>
              <Card.Text className="text-muted">tanggal 04/07/2024</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 7 */}
        <Col md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="/img/project-6.jpg" alt="Farhan Ali" />
            <Card.Body className="text-center">
              <Card.Title>Farhan Ali, S.Pd.</Card.Title>
              <Card.Text className="text-muted">tanggal 04/07/2024</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 8 */}
        <Col md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="/img/service-1.jpg" alt="Aisyah Khadijah" />
            <Card.Body className="text-center">
              <Card.Title>Aisyah Khadijah, S.Pd.</Card.Title>
              <Card.Text className="text-muted">tanggal 04/07/2024</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 9 */}
        <Col md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="/img/service-2.jpg" alt="Ismail Fahmi" />
            <Card.Body className="text-center">
              <Card.Title>Ismail Fahmi, M.Pd.</Card.Title>
              <Card.Text className="text-muted">tanggal 04/07/2024</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 10 */}
        <Col md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="/img/" alt="Fitriani" />
            <Card.Body className="text-center">
              <Card.Title>Fitriani, S.Pd.</Card.Title>
              <Card.Text className="text-muted">tanggal 04/07/2024</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 11 */}
        <Col md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="/img/" alt="Zainal Arifin" />
            <Card.Body className="text-center">
              <Card.Title>Zainal Arifin, S.Pd.</Card.Title>
              <Card.Text className="text-muted">tanggal 04/07/2024</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default GalleryFull;
