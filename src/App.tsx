import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { WinesList } from './components/WinesList';

const App = () => (
  <QueryClientProvider client={new QueryClient()}>
    <WinesList />
  </QueryClientProvider>
)

export default App;
