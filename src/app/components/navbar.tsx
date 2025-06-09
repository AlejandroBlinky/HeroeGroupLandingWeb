'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../img/logoheroegrup.png';
import heroeracelogo from '../../img/díacarrera.png';
import duatlonlogo from '../../img/logo_dua.png';
import paranormallogo from '../../img/logoheroeparanormal.png';
import contactologo from '../../img/wpp.png';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="navbarcss1 shadow"
    >
      <Container fluid className="d-flex justify-content-between align-items-center" style={{ width: '25%' }}>
        <Link href="/" className="navbarlogoa d-flex align-items-center" onClick={handleNavClick}>
          <Image src={logo} alt="Logo Héroe Group" className="navbarlogo" priority />
        </Link>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler m-3"
          onClick={() => setExpanded(!expanded)}
        />
      </Container>

      <Container>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center" style={{ alignContent: 'center', alignItems: 'center' }}>
          <Nav className="navbarcss fw-bold fs-5">
            <Nav.Item className="navbaroptionswithlogo d-flex align-items-center">
              <Image src={duatlonlogo} alt="Duatlón Logo" className="logonavduatlon" />
              <Link href="/duatlonlafalda" className="navbarcssitems nav-link" onClick={handleNavClick}>Duatlon La Falda</Link>
            </Nav.Item>

            <Nav.Item className="navbaroptionswithlogo d-flex align-items-center">
              <Image src={heroeracelogo} alt="HeroeRace Logo" className="logonavheroerace" />
              <Link href="/heroerace" className="navbarcssitems nav-link" onClick={handleNavClick}>Heroes Race</Link>
            </Nav.Item>

            <Nav.Item className="navbaroptionswithlogo d-flex align-items-center">
              <Image src={paranormallogo} alt="Paranormal Logo" className="logonavparanormal" />
              <Link href="/heroeraceparanormal" className="navbarcssitems nav-link" onClick={handleNavClick}>Heroes Race Paranormal</Link>
            </Nav.Item>

            <Nav.Item className="navbaroptionswithlogo d-flex align-items-center">
              <Image src={contactologo} alt="Contacto Logo" className="logonavcontacto" />
              <Link href="/contacto" className="navbarcssitems nav-link" onClick={handleNavClick}>Contacto</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
