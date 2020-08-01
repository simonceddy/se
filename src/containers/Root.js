import React from 'react';
import { ThemeProvider } from 'styled-components';
import App from './App';
import useTheme from '../hooks/useTheme';

function Root() {
  const { mode, setTheme } = useTheme();

  return (
    <ThemeProvider theme={{ mode }}>
      <App setTheme={setTheme} themeMode={mode} />
    </ThemeProvider>
  );
}

export default Root;
