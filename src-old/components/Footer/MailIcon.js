import React from 'react';
import {
  FiPhone as FiMailIcon
} from 'react-icons/fi';
import FooterIconContainer from './FooterIconContainer';

function MailIcon() {
  return (
    <FooterIconContainer>
      <a href="mailto:simon@simoneddy.com.au" className="nav-link flex items-center">
        <FiMailIcon />
        <span className="footer-label">simon@simoneddy.com.au</span>
      </a>
    </FooterIconContainer>
  );
}

export default MailIcon;
