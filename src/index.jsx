import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';

const theme = {
  backgroundColor: '#fefefe',
  sectionColor: '#f1f1f1',
  headerColor: '#2c6d7d',
  titleColor: '#47b3cd',
  textColor: '#000000',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider
        theme={theme}
      >
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);