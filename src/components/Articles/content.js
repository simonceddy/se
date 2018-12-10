import React from 'react';

const Articles = {
    contact: {
        
        title: 'Contact Simon',
        content: () => {
            return <div>
                <ul>
                <li>Mobile: 0402 499 551</li>
                <li>Email: <a href="mailto:simon@simoneddy.com.au">simon@simoneddy.com.au</a></li>
                </ul>
            </div>
        }
    },
    services: {
        title: 'Services',
        content: () => {
            return <div className="container">
                Simon offers a variety of Web Development services, including:<br></br>
                <ul>
                <li>Websites and web applications,</li>
                <li>Database development,</li>
                <li>Interactive multimedia development (touchscreen displays, online exhibibtions),</li>
                </ul>
                <br></br>
                I.T. Support services are also available. <a href="/contact">Contact Simon</a> to book a visit.
                <br></br>
                <br></br>
                Simon also offers audio engineering services (please <a href="./contact">Contact Simon</a> for more information).
                <br></br>
                
                <br></br>
                
                <h2>Pricing</h2>
                
                <strong>I.T. Support Services</strong> are charged at <strong><span>$50 per hour</span></strong> with a minimum 1 hour callout and charged in half hour blocks after the initial hour.<br></br>
                <strong>Web Development prices will vary depending on the requirements of the job. </strong>Please contact Simon for a quote.<br></br>
            </div>
        }
    },
    home: {
        
        title: 'Welcome',
        content: () => {
            return <div className="container">
                <p>Put introduction here - come up with brief summary of site contents and purpose</p>
            </div>
        }
    },
    about: {
        
        title: 'I, Simon',
        content: () => {
            return <div className="container">
            <p>Brief history - from Phillip Island etc</p>
            <p>Interests - music/audio, stats + sports</p>
            </div>
        }
    },
    work: {
        
        title: 'Previous Work and Examples',
        content: () => {
            return <div className="container">
                            <p><span>Since 2014 Simon has worked on a number of projects with local community groups including:</span></p>
        
        <ul>
            <li><span>Websites</span></li>
            <li><span>Web-based Database Applications</span></li>
            <li><span>Video and multimedia development and production</span></li>
        </ul>
        
         <br></br>
        
        <h3><big><span>Examples of previous work</span></big></h3>
        <div className="text-center">
            <a href="http://pidhs.org.au/" rel="noopener noreferrer" target="_blank"><img className="fit-to-container" alt="Phillip Island and District Historical Society" src="http://pidhs.org.au/gallery/logo1.png"/></a><br></br>
            
            <a href="http://piadgs.org.au/" rel="noopener noreferrer" target="_blank"><img className="fit-to-container" alt="Phillip Island And District Genealogical Society" src="http://piadgs.org.au/gallery/logo1.png"/></a><br></br>
        </div>
            </div>
        }
    },
    
};

export default Articles;