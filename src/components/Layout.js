import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../themes';

const backgroundColour = theme('mode', colourMaps.background);
const textColour = theme('mode', colourMaps.text);

const StyledLayout = styled.div`
  background-color: ${backgroundColour};
  color: ${textColour};
`;

function Layout({ children }) {
  return (
    <StyledLayout className="w-full min-h-full">
      {children}
    </StyledLayout>
  );
}

export default Layout;
