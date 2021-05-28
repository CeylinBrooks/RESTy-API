import React from 'react';
import './header.scss'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div id="header">
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Limelight&display=swap" rel="stylesheet"></link>
      <header>
      <h1 id="restHeader">RESTy</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">History</NavLink>
          </li>
          <li>
            <NavLink to="/">Help</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Header;