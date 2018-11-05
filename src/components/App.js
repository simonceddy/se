import React, { Component } from 'react';
import { BrowserRouter  as Router, Route, Link } from 'react-router-dom'
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
import Home from './Articles/Home';
import About from './Articles/About';
import Contact from './Articles/Contact';
import Services from './Articles/Services';
import Work from './Articles/Work';
import Footer from './Footer';
import './App.scss';

import * as Articles from './Articles/content';
console.log(Articles);
library.add(faGithubSquare, faEnvelope, faPhoneSquare);

class App extends Component {
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
    return (
      <Router>
        <div className="App container">
          <div className="App-header container monospace-text yellow-bit">
            <h1 className="App-title"><span id="title-name">Simon Eddy</span><span id="title-seperator">::</span><span id="title-title">Web Development</span></h1>
          </div>
          <div className="container green-bit" id="menu-container">
            <Navbar light expand="md">
            <NavbarToggler onClick={this.toggleNavbar} />
              <Collapse isOpen={!this.state.collapsed} navbar>
                  <Nav className="mx-auto monospace-text" id="menu" navbar>
                    <NavItem><Link className="nav-link" to="/">Home</Link></NavItem>
                    <NavItem><Link className="nav-link" to="/about">About</Link></NavItem>
                    <NavItem><Link className="nav-link" to="/services">Services</Link></NavItem>
                    <NavItem><Link className="nav-link" to="/work">Work</Link></NavItem>
                    <NavItem><Link className="nav-link" to="/contact">Contact</Link></NavItem>
                    {/* <NavItem><Link className="nav-link" to="http://blog.se">Blog</Link></NavItem> */}
                  </Nav>
                </Collapse>
            </Navbar>            

            
          </div>
          <Container className="yellow-bit" id="article">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/services" component={Services}/>
              <Route path="/work" component={Work}/>
              <Route path="/contact" component={Contact}/>
            </Container>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
