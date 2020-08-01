import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuLink({ children, to, exact = true }) {
  return (
    <NavLink to={to} exact={exact}>
      {children}
    </NavLink>
  );
}

export default MenuLink;
