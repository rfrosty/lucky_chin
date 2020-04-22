import React from 'react';
import { Nav } from 'react-bootstrap';


function Header1() {
    return (
      <Nav
      className="NavBar"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/">Inventory Management</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/inventory'>Inventory</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/supplier">Suppliers</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/addNew">
          Add New
        </Nav.Link>
      </Nav.Item>
    </Nav>
    );
}

export default Header1;