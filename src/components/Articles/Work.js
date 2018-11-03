import React, { Component } from 'react';

class Work extends Component
{
    render() {
        return (
            <div>
                <h1 className="monospace-text">Examples of Work</h1>

                <span>Since 2014 Simon has worked on a number of projects with local community groups including:</span><br></br>
        
        <ul>
            <li><span>Websites</span></li>
            <li><span>Web-based Database Applications</span></li>
            <li><span>Video and multimedia development and production</span></li>
        </ul>
        
         <br></br>
        
        <h2><big><span>Examples of previous work (links open in new window)</span></big></h2>
        
        <a href="http://pidhs.org.au/" rel="noopener noreferrer" target="_blank"><img className="fit-to-container" alt="Phillip Island and District Historical Society" src="http://pidhs.org.au/gallery/logo1.png"/></a><br></br>
        
        <a href="http://piadgs.org.au/" rel="noopener noreferrer" target="_blank"><img className="fit-to-container" alt="Phillip Island And District Genealogical Society" src="http://piadgs.org.au/gallery/logo1.png"/></a><br></br>
            </div>
        );
    }
}

export default Work;