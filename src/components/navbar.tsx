'use client'

import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="navbar py-0 pe-5">
        <Navbar.Brand href="home" className="ps-5 me-0">
          <h1 className="text-white m-0">MTs AL-MA&apos;ARIJ</h1>
        </Navbar.Brand>
      
        <Navbar.Toggle aria-controls="navbarCollapse" className="me-0" />
        <Navbar.Collapse id="navbarCollapse">
          <Nav className="ms-auto p-4 p-lg-0">
            <Nav.Link href="/" className="active">Home</Nav.Link>
            <NavDropdown title="Tentang" id="nav-dropdown">
              <NavDropdown.Item href="profile">Profil</NavDropdown.Item>
              <NavDropdown.Item href="visimisi">Visi dan Misi</NavDropdown.Item>
              <NavDropdown.Item href="organisasi">Struktur Organisasi</NavDropdown.Item>
              <NavDropdown.Item href="staf">Staff Pengajar</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="http://example.com/e-perpus">PPDB</Nav.Link>
            <Nav.Link href="galeri">Galeri</Nav.Link>
            <Nav.Link href="erorr.html">Berita</Nav.Link>
            <Nav.Link href="/contak">Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
