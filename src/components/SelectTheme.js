import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../themes';

const backgroundColour = theme('mode', colourMaps.background);
const textColour = theme('mode', colourMaps.text);

const StyledSelect = styled.select`
  background-color: ${backgroundColour};
  color: ${textColour};
  border: 2px solid ${textColour};
`;

function SelectTheme({
  value,
  themes = [],
  onChange
}) {
  return (
    <StyledSelect value={value} onChange={onChange}>
      {themes.map((val = {}, key) => (
        <option value={val.mode} label={val.label} key={key} />
      ))}
    </StyledSelect>
  );
}

export default SelectTheme;
