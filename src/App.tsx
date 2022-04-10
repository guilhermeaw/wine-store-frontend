import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { AppProvider } from './store';

import { Routes } from './routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={new QueryClient()}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </QueryClientProvider>

    <GlobalStyles />
  </ThemeProvider>
)

export default App;
