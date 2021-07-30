import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'sanitize.css/sanitize.css';
import './index.css';

// Import root app
import App from './components/App/App';

import { HelmetProvider } from 'react-helmet-async';

const MOUNT_NODE = document.getElementById('root');

const ConnectedApp = ({ Component }) => (
  <HelmetProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>
);
const render = Component => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

render(App);
