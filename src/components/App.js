import React, { Component } from 'react';
import { BrowserRouter  as Router, Route, NavLink as Link } from 'react-router-dom'
import {
  Collapse,
  Container,
  Navbar,
  Nav,
  NavItem,
  NavbarToggler
} from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer/Footer';
import './App.scss';
import Article from  './Article/Article';

import * as articles from './Articles/content';
console.log(articles);
library.add(faGithubSquare, faEnvelope, faPhoneSquare);

class Menu extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (<Navbar light expand="md">
    <NavbarToggler onClick={this.toggleNavbar} />
      <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="mx-auto monospace-text" id="menu" navbar>
            <NavItem><Link className="nav-link" exact to="/">Home</Link></NavItem>
            <NavItem><Link className="nav-link" to="/about">About</Link></NavItem>
            <NavItem><Link className="nav-link" to="/services">Services</Link></NavItem>
            <NavItem><Link className="nav-link" to="/work">Work</Link></NavItem>
            <NavItem><Link className="nav-link" to="/contact">Contact</Link></NavItem>
            {/* <NavItem><Link className="nav-link" to="http://blog.se">Blog</Link></NavItem> */}
          </Nav>
        </Collapse>
    </Navbar>  );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <div className="App-header container monospace-text yellow-bit">
            <h1 className="App-title"><span id="title-name">Simon Eddy</span><span id="title-seperator">::</span><span id="title-title">Web Development</span></h1>
          </div>
          <div className="container green-bit" id="menu-container">
            <Menu />            
          </div>
          <Container className="yellow-bit" id="article">
              <Route exact path="/" render={props => <Article {...props} extra={articles.default.home} /> }/>
              <Route path="/about" render={props => <Article {...props} extra={articles.default.about} /> }/>
              <Route path="/services" render={props => <Article {...props} extra={articles.default.services} /> }/>
              <Route path="/work" render={props => <Article {...props} extra={articles.default.work} /> }/>
              <Route path="/contact" render={props => <Article {...props} extra={articles.default.contact} /> }/>
            </Container>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
