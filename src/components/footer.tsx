'use client'

import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <div className="bg-blue text-center py-4">
        <Container>
          <p className="mb-2 text-white">
            Copyright &copy; <a className="fw-semi-bold text-white" href="#">MTs AL-MA&apos;ARIJ</a>, All Right Reserved.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
