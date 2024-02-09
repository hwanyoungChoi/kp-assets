import { Suspense } from 'react';
import AppRoutes from './AppRoutes';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './lib/api/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback="loading">
        <AppRoutes />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
