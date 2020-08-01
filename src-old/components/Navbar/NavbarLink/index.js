import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavbarLink.css';

const NavbarLink = (props) => {
  return (
    <NavLink to={props.to || "/"} exact={props.exact || false} className="nav-link navbar-link" onClick={props.handler}>
      {props.name}
    </NavLink>
  );
};

export default NavbarLink;