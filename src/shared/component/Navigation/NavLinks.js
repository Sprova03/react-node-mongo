import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink activeClassName="active" to="./" exact>
          All Users
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="./u1/places">
          My Places
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="./places/new">
          Add Place
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="./auth">
          Authenticate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
