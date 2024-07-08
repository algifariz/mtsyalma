'use client'

import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import Image from 'next/image'; // Add this import

const WelcomeSection = () => {
  // State untuk mengatur visibilitas modal
  const [show, setShow] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  // Fungsi untuk membuka modal dan menyetel URL video
  const handleShow = (url: string) => {
    setVideoSrc(url);
    setShow(true);
  };

  // Fungsi untuk menutup modal
  const handleClose = () => {
    setVideoSrc('');
    setShow(false);
  };

  return (
    <>
      <Container>
        <div className="text-center mx-auto pb-4 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="display-5 mb-4">Selamat Datang Di MTs AL-MA&apos;ARIJ</h1> {/* Escaped single quote */}
        </div>
      </Container>

      <Container fluid="xxl" className="py-5">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6} className="wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative me-lg-4">
                <Image
                  className="img-fluid w-100"
                  src="/img/pngtree-principal-clipart-image-of-cartoon-character-standing-with-glasses-and-tie-vector-png-image_6812526.png"
                  alt="Principal"
                  layout="responsive"
                  width={700}
                  height={475}
                />
                <span
                  className="position-absolute top-50 start-100 translate-middle bg-white rounded-circle d-none d-lg-block"
                  style={{ width: '120px', height: '120px' }}
                ></span>
                <Button
                  variant="link"
                  className="btn-play"
                  onClick={() => handleShow('https://www.youtube.com/embed/yAIbHfaNq98')}
                >
                  <span></span>
                </Button>
              </div>
            </Col>

            <Col lg={6} className="wow fadeInUp" data-wow-delay="0.5s">
              <p className="fw-medium text-uppercase text-primary mb-2">Sambutan Kepala Sekolah</p>
              <h1 className="display-5 mb-4">Moch Algifari Alifuidn Zidan S.Kom</h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Modal Video */}
      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="exampleModalLabel" centered>
        <Modal.Header closeButton>
          <Modal.Title id="exampleModalLabel">Youtube Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ratio ratio-16x9">
            <iframe
              className="embed-responsive-item"
              src={videoSrc}
              id="video"
              allowFullScreen
              allow="autoplay"
              title="Video"
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WelcomeSection;
