import React from 'react';
import styled from 'styled-components';

const RedContainer = styled.h1`
  
`;

const SpacerContainer = styled.h1`
  
`;

const BlueContainer = styled.h1`
  
`;

function Title() {
  return (
    <>
      <RedContainer>Simon Eddy</RedContainer>
      <SpacerContainer className="text-black header-spacer">::</SpacerContainer>
      <BlueContainer>Web Development</BlueContainer>
    </>
  );
}

export default Title;
