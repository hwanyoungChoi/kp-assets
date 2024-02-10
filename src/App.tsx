import { Suspense, useEffect, useState } from 'react';
import AppRoutes from './AppRoutes';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './lib/api/queryClient';

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

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback="loading">
        <div style={{ height: innerHeight }}>
          <AppRoutes />
        </div>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
