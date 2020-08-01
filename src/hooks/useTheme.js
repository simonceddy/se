import { useState } from 'react';
import { getThemeMode, storeThemeMode } from '../utils/themeStorage';

export default function useTheme() {
  const [mode, setMode] = useState(getThemeMode());

  const setTheme = (themeMode) => setMode(storeThemeMode(themeMode));

  return {
    mode,
    setTheme
  };
}
