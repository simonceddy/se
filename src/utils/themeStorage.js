/**
 * Store the theme mode in localStorage.
 * @param {string} mode The current theme mode
 * @return {string} Returns the given mode
 */
export function storeThemeMode(mode) {
  localStorage.setItem('se_theme', mode);
  return mode;
}

/**
 * Get the mode from localStorage or the default theme if no mode is stored.
 */
export function getThemeMode() {
  return localStorage.getItem('se_theme') || 'defaultLight';
}
