'use client'

import React from 'react';
import { Container, Image } from 'react-bootstrap';


const OrganizationStructure = () => {
  return (
    <Container className="my-5 text-center">
      <h1 className="text-blue mb-4">Struktur Organisasi</h1>
      <div className="organization-chart d-flex justify-content-center">
        <Image 
          src="/img/Beige Modern Organizational Chart.png" 
          alt="Struktur Organisasi" 
          fluid 
        />
      </div>
    </Container>
  );
};

export default OrganizationStructure;
