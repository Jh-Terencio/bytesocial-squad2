import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/messages/App';
import './styles/global.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);