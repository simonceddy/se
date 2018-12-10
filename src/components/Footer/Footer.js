import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';

class Footer extends Component
{
    render() {
        return (
            <div className="container monospace-text green-bit" id="footer">
                <span className="footer-text"><FontAwesomeIcon icon={['fas', 'phone-square']} size="2x" className="footer-icon"/> 0404 299 551</span>
                
                <a href="mailto:simon@simoneddy.com.au"><span className="footer-text"><FontAwesomeIcon icon={['far', 'envelope']} size="2x"  className="footer-icon"/> simon@simoneddy.com.au</span></a>

                <a href="http://github.com/simonceddy"><span className="footer-text"><FontAwesomeIcon icon={['fab', 'github-square']} size="2x" className="footer-icon"/> github.com/simonceddy</span></a>
            </div>
        );
    }   
}

export default Footer;