import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from './Title';

const StyledHeader = styled.div`
  & > a:hover > h1 {
    text-decoration: underline;
    text-decoration-color: inherit;
  }

  & > a:hover > .header-spacer {
    text-decoration: none;
  }
`;

function Header() {
  return (
    <StyledHeader className="flex justify-center text-2xl font-mono mx-4 my-2">
      <Link to="/" className="flex justify-center">
        <Title />
      </Link>
    </StyledHeader>
  );
}

export default Header;
