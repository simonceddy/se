import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-center header theme-font-main mx-4 my-2">
      <Link to="/" className="flex justify-center">
        <h1 className="text-red">Simon Eddy</h1>
        <h1 className="header-spacer">::</h1>
        <h1 className="text-blue">Web Development</h1>
      </Link>
    </div>
  );
};

export default Header;