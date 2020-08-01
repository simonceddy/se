import React from 'react';
import {
  FiGithub as FiGithubIcon
} from 'react-icons/fi';
import FooterIconContainer from './FooterIconContainer';

function GithubIcon() {
  return (
    <FooterIconContainer>
      <a href="https://github.com/simonceddy" className="nav-link flex items-center">
        <FiGithubIcon />
      </a>
    </FooterIconContainer>
  );
}

export default GithubIcon;
