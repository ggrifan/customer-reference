import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg='success' variant='dark'>
      <NavbarBrand as={Link} to='/' style={{fontWeight: 500}}>Справочник клиентов</NavbarBrand>
      <Navbar.Collapse>
        <Nav className='mr-auto'>
          <Nav.Link as={Link} to='/customer'>Клиенты</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}