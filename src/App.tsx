import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { Routes } from './routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={new QueryClient()}>
      <Routes />
    </QueryClientProvider>

    <GlobalStyles />
  </ThemeProvider>
)

export default App;
