import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import PortifolioProvider from './context/PortifolioProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PortifolioProvider>
        <App />
      </PortifolioProvider>
    </BrowserRouter>
  </React.StrictMode>
);