import React from 'react';
import {
  FiPhone as FiPhoneIcon
} from 'react-icons/fi';
import FooterIconContainer from './FooterIconContainer';

function PhoneIcon() {
  return (
    <FooterIconContainer>
      <a href="tel://61402499551" className="nav-link flex items-center">
        <FiPhoneIcon />
        <span className="footer-label">0402 499 551</span>
      </a>
    </FooterIconContainer>
  );
}

export default PhoneIcon;
