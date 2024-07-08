'use client'
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const TeacherData = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center text-dark mb-4">Data Guru MTs AL-MA&apos;ARIJ</h1>
      <Row className="g-4">
        {/* Card 1 */}
        <Col md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="/img/GOY02107 (Copy).JPG" alt="Ahmad Syamsuri" />
            <Card.Body className="text-center">
              <Card.Title>Ahmad Syamsuri, S.Pd.</Card.Title>
              <Card.Text>Matematika</Card.Text>
              <Card.Text className="text-muted">NIP: 19700415 199512 1 001</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 2 */}
        <Col md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="/img/project-1.jpg" alt="Siti Hajar" />
            <Card.Body className="text-center">
              <Card.Title>Siti Hajar, S.Ag.</Card.Title>
              <Card.Text>Pendidikan Agama Islam</Card.Text>
              <Card.Text className="text-muted">NIP: 19820814 200902 1 002</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 3 */}
        <Col md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="/img/project-5.jpg" alt="Fatimah Zahra" />
            <Card.Body className="text-center">
              <Card.Title>Fatimah Zahra, M.Pd.</Card.Title>
              <Card.Text>Bahasa Inggris</Card.Text>
              <Card.Text className="text-muted">NIP: 19830523 200801 1 003</Card.Text>
            </Card.Body>
          </Card>
        </Col>
          {/* Card 4 */}
          <Col md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="/img/project-5.jpg" alt="Fatimah Zahra" />
            <Card.Body className="text-center">
              <Card.Title>Fatimah Zahra, M.Pd.</Card.Title>
              <Card.Text>Bahasa Inggris</Card.Text>
              <Card.Text className="text-muted">NIP: 19830523 200801 1 003</Card.Text>
            </Card.Body>
          </Card>
        </Col>
         {/* Card 4 */}
         <Col md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="/img/project-5.jpg" alt="Fatimah Zahra" />
            <Card.Body className="text-center">
              <Card.Title>Fatimah Zahra, M.Pd.</Card.Title>
              <Card.Text>Bahasa Inggris</Card.Text>
              <Card.Text className="text-muted">NIP: 19830523 200801 1 003</Card.Text>
            </Card.Body>
          </Card>
        </Col>
         {/* Card 4 */}
         <Col md={6} lg={4}>
          <Card>
            <Card.Img variant="top" src="/img/project-5.jpg" alt="Fatimah Zahra" />
            <Card.Body className="text-center">
              <Card.Title>Fatimah Zahra, M.Pd.</Card.Title>
              <Card.Text>Bahasa Inggris</Card.Text>
              <Card.Text className="text-muted">NIP: 19830523 200801 1 003</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more cards as needed */}
      </Row>
    </Container>
  );
};

export default TeacherData;
