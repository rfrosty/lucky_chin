import React from 'react';

const NavBar = (props) => {
  return (
    <header>
      <img src="/logos/lucky_chen.png" alt="Logo"/>
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
      </ul>


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
