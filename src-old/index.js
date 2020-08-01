import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './shared/styles/tailwind.css';
import './shared/styles/index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={{ mode: 'default' }}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();