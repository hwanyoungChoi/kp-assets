import { Suspense } from 'react';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <Suspense fallback="loading">
      <AppRoutes />
    </Suspense>
  );
}

export default App;
