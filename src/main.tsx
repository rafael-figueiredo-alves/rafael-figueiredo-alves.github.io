import React, { createRef } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import App from './App';

const rootElement = document.querySelector('#root');

if (!rootElement) throw new Error('Falha ao tentar obter elemento root');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <CssBaseline />
     <App />
    </ThemeProvider>
  </React.StrictMode>,
)
