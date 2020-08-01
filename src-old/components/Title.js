import React from 'react';
import styled from 'styled-components';
import HeadingContainer from '../shared/components/HeadingContainer';

const NameContainer = styled(HeadingContainer)`
  
`;

const SpacerContainer = styled(HeadingContainer)`
  
`;

const RoleContainer = styled(HeadingContainer)`
  
`;

function Title() {
  return (
    <>
      <NameContainer>Simon Eddy</NameContainer>
      <SpacerContainer className="text-black header-spacer">::</SpacerContainer>
      <RoleContainer>Web Development</RoleContainer>
    </>
  );
}

export default Title;
