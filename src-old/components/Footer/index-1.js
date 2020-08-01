import React from 'react';
import {
  FiGithub as GithubIcon,
  FiPhone as PhoneIcon,
  FiMail as MailIcon
} from 'react-icons/fi';
import './footer.css'

const Footer = () => {
  return (
    <div className="footer flex justify-between mt-2 mx-4 theme-font-main py-3">
      <div className="flex items-center">
        <a href="tel://61402499551" className="nav-link flex items-center">
          <PhoneIcon />
          <span className="footer-label">0402 499 551</span>
        </a>
      </div>
      <div className="flex items-center">
      <a href="mailto:simon@simoneddy.com.au" className="nav-link flex items-center">
        <MailIcon />
        <span className="footer-label">simon@simoneddy.com.au</span>
      </a>
      </div>
      <div className="text-right footer-icons flex items-center">
        <a href="https://github.com/simonceddy" className="nav-link flex items-center">
          <GithubIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;