import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import { WinesList } from './components/WinesList';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={new QueryClient()}>
      <WinesList />
    </QueryClientProvider>

    <GlobalStyles />
  </ThemeProvider>
)

export default App;
