import React from 'react';
import {
  Navbar, Nav,
} from 'react-bootstrap';
import { MdAddShoppingCart, MdAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

function index() {
  return (

    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand style={{ fontWeight: '40px ' }} href="/">Louis Vuitton</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to="/novidades">Novidades</Link>
          <Link className="nav-link" to="/products">Products</Link>
          <Link className="nav-link" to="/favorites">Favorites</Link>
        </Nav>
        <MdAddShoppingCart className="icons" />
        <MdAccountCircle className="icons" />
      </Navbar>
    </>
  );
}

export default index;
