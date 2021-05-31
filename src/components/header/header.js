import React from 'react';
import './header.scss'
import { NavLink } from 'react-router-dom';
import { render } from '@testing-library/react';

class Header extends React.Component{
  render (){
    return(
      <div id="header">
        <header>
          RESTy
        </header>
        <nav>
          <ul>
            <li className="liHeader">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="liHeader">
              <NavLink to="/history">History</NavLink>
            </li>
            <li className="liHeader">
              <NavLink to="/help">Help</NavLink>
            </li>

          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;