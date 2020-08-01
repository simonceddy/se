import React from 'react';

const Work = () => {
  return (
    <div>
      <h1 className="theme-font-main">Previous Work & Examples</h1>
      <div>
      <p><span>Since 2014 Simon has worked on a number of projects with local community groups including:</span></p>
        
        <ul className="text-left">
            <li className="m-2"><span>Websites</span></li>
            <li className="m-2"><span>Web-based Database Applications</span></li>
            <li className="m-2"><span>Video and multimedia development and production</span></li>
        </ul>
        </div>
        <h1 className="theme-font-main mt-5">Examples of previous work</h1>
        <div className="text-center">
            <a href="http://pidhs.org.au/" rel="noopener noreferrer" target="_blank"><img className="fit-to-container" alt="Phillip Island and District Historical Society" src="http://pidhs.org.au/gallery/logo1.png"/></a><br></br>
            
            <a href="http://piadgs.org.au/" rel="noopener noreferrer" target="_blank"><img className="fit-to-container" alt="Phillip Island And District Genealogical Society" src="http://piadgs.org.au/gallery/logo1.png"/></a><br></br>
        </div>
    </div>
  );
};

export default Work;