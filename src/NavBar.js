import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <header>
      {/* <img src="/logos/lucky_chen.png" alt="Logo"/>
      <ul className="NavBar">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/inventory">Inventory</a>
        </li>
        <li>
          <a href="/suppliers">Suppliers</a>
        </li>
      </ul> */}

    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><img src="/logos/lucky_chen.png" alt="Logo" height="100px"/>
</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/inventory">Inventory</Nav.Link>
          <Nav.Link href="/suppliers">Suppliers</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>








      {/*
      EXTENSION
      <ul>
        <li>Perishable</li>
        <li>Fresh</li>
        <li>Suppliers</li>
        <li>About to expire (flashes red x amount of days before?)</li>
      </ul>

      */}

    </header>
  )
}

export default NavBar;
