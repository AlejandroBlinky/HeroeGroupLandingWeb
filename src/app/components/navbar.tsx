'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../img/logoheroegrup.png';
import heroeracelogo from '../../img/díacarrera.png';
import duatlonlogo from '../../img/logo_dua.png';
import paranormallogo from '../../img/logoheroeparanormal.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import contactologo from '../../img/wpp.png';

export default function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="navbarcss1 shadow">
      <a href='/'><Image src={logo} alt="logo" className="navbarlogo m-2" /></a>
      <Container className=''>
        <Navbar.Brand href="/">
          
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
          className="navbar-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav" className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
          <Nav className="navbarcss fw-bold fs-5 ">
          <Nav.Item className="navbaroptionswithlogo">
              <Image src={paranormallogo} alt="paranormallogo" className="logosnavbar" />
              <Nav.Link href="/heroeraceparanormal" className="navbarcssitems">Heroes Race Paranormal</Nav.Link>
            </Nav.Item>
            <Nav.Item className="navbaroptionswithlogo" >
              <Image src={heroeracelogo} alt="heroeracelogo" className="logosnavbar" />
              <Nav.Link href="/heroerace" className="navbarcssitems">Heroes Race</Nav.Link>
            </Nav.Item>
            <Nav.Item className="navbaroptionswithlogo">
              <Image src={duatlonlogo} alt="dualogo" className="logosnavbar" />
              <Nav.Link href="/duatlonlafalda" className="navbarcssitems">Duatlon La Falda</Nav.Link>
            </Nav.Item>
            <Nav.Item className="navbaroptionswithlogo">
              <Image src={contactologo} alt="contactologo" className="logosnavbar" />
              <Nav.Link href="/contacto" className="navbarcssitems">Contacto</Nav.Link>
            </Nav.Item>
          </Nav>
          
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
  );
}
