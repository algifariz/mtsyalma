'use client'

import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
// import 'bootstrap/dist/css/bootstrap.min.css';

const MyCarousel = () => {
    return (
      <div className="container-fluid px-0 mb-5">
        <Carousel id="header-carousel" className="carousel slide">
          <Carousel.Item >  
            <Image
              className="d-block w-100"
              src="/img/il-photo-01.png"
              alt="First slide"
              layout="responsive"
              width={1920}
              height={1080}
            />
            <Carousel.Caption className="carousel-caption">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={10} className="text-start">
                    <p className="fs-5 fw-medium text-primary text-uppercase animated slideInRight"></p>
                    <h1 className="display-1 text-white mb-5 animated slideInRight">
                      Selamat Datang Di MTs AL-MA&apos;ARIJ
                    </h1>
                    {/* <Button className="btn-primary py-3 px-5 animated slideInRight">Explore More</Button> */}
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>  
            <Image
              className="d-block w-100"
              src="/img/three-asian-girls-veils-school-uniforms-stand-smiling-using-tablet-digital-while-carrying-ba_8595-24849.jpeg"
              alt="Second slide"
              layout="responsive"
              width={1920}
              height={1080}
            />
            <Carousel.Caption className="carousel-caption">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={10} className="text-start">
                    <p className="fs-5 fw-medium text-white text-uppercase animated slideInRight">
                      PPDB 2024/2025
                    </p>
                    <h1 className="display-1 text-white mb-5 animated slideInRight">
                      Pendaftaran Siswa dan Siswi baru telah dibuka
                    </h1>
                    <Button
                      href="https://forms.gle/KC6VvCKd9VA81CGU6"
                      className="btn-custom py-3 px-5 animated slideInRight"
                      variant="primary"
                    >
                      Daftar Sekarang
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  };

export default MyCarousel;
