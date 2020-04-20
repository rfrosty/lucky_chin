import React from 'react';

const NavBar = (props) => {
  return (
    <header>
      <img src="/logos/lucky_chen.png" alt="Logo"/>
      <ul>
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

      PIRATES

      <ul>
        <li className="navLink"> //don't understand why we haven't used link tag. Guess links to routes work.
          <a href="/pirates">Pirates</a>
        </li>
        <li className="navLink">
        <a href="/pirates/new">Create Pirate</a>
        </li>
        <li className="navLink">
          <a href="/ships">Ships</a>
        </li>
        <li className="navLink">
          <a href="/ships/new">Create Ship</a>
        </li>
        <li className="navLink">
          <a href="/ships/dew">Create Dew</a>
        </li>

      </ul>

      */}

    </header>
  )
}

export default NavBar;
