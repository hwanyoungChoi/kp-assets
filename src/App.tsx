import { Suspense, useEffect, useState } from 'react';
import AppRoutes from './AppRoutes';
import {
  QueryClientProvider,
  useQueryErrorResetBoundary,
} from '@tanstack/react-query';
import queryClient from './lib/api/queryClient';
import { ErrorBoundary } from 'react-error-boundary';
import ApiErrorFallback from './pages/ErrorFallbackPage';

function App() {
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setInnerHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary FallbackComponent={ApiErrorFallback} onReset={reset}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback="loading">
          <div style={{ height: innerHeight }}>
            <AppRoutes />
          </div>
        </Suspense>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
