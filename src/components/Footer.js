import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Footer extends Component
{
    render() {
        return (
            <div className="container monospace-text green-bit" id="footer">
                <span className="footer-text"><a href="http://github.com/simonceddy"><FontAwesomeIcon icon={['fab', 'github-square']} size="2x" /></a></span>
                
                <span className="footer-text"><FontAwesomeIcon icon={['fas', 'phone-square']} size="2x" /> 0402 499 551</span>
                
                <span className="footer-text"><FontAwesomeIcon icon={['far', 'envelope']} size="2x" /> <a href="mailto:simon@simoneddy.com.au">simon@simoneddy.com.au</a></span>
            </div>
        );
    }   
}

export default Footer;