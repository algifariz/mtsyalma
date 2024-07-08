'use client'

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <div>
      <div className="bg-blue text-center py-4">
        <Container>
          <p className="mb-2 text-white">
            Copyright &copy; <a className="fw-semi-bold text-white" href="#">MTs AL-MA'ARIJ</a>, All Right Reserved.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
