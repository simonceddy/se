import React, { Component } from 'react';

class Contact extends Component
{
    render() {
        return (
            <div>
                <h1 className="monospace-text">Contact Simon</h1>
                <div className="container">
                    Mobile: 0402 499 551<br></br>
                
                    Email: <a href="mailto:simon@simoneddy.com.au">simon@simoneddy.com.au</a>
                </div>
            </div>
        );
    }
}

export default Contact;