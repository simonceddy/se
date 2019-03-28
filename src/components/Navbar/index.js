import React from 'react';
import './navbar.css';
import NavbarLink from './NavbarLink';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isCollapsed: true
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.collapseMenu = this.collapseMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  }

  collapseMenu() {
    if (!this.state.isCollapsed) this.setState({
      isCollapsed: true
    });
  }

  render() {
    let style = (this.state.isCollapsed) ? " collapsed" : "";
    return (
      <div className={"navbar flex justify-around theme-font-main mx-4 my-2" + style}>
        <span className="nav-link menu-toggle" onClick={this.toggleMenu}>MENU</span>
        <NavbarLink to="/" exact name="Home" handler={this.collapseMenu} />
        <NavbarLink to="/about" name="About" handler={this.collapseMenu} />
        <NavbarLink to="/work" name="Work" handler={this.collapseMenu} />
        <NavbarLink to="/services" name="Services" handler={this.collapseMenu} />
        <NavbarLink to="/contact" name="Contact" handler={this.collapseMenu} />
      </div>
    );
  }
}

export default Navbar;