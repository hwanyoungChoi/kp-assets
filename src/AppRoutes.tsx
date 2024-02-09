import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PATHS } from './lib/routes';
import { lazy } from 'react';

const OtherAssetListPage = lazy(() => import('./pages/OtherAssetListPage'));
const OtherAssetEditPage = lazy(() => import('./pages/OtherAssetEditPage'));
const OtherAssetDetailPage = lazy(() => import('./pages/OtherAssetDetailPage'));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={PATHS.OtherAssetList} />} />
        <Route path={PATHS.OtherAssetList} element={<OtherAssetListPage />} />
        <Route path={PATHS.OtherAssetEdit} element={<OtherAssetEditPage />} />
        <Route
          path={PATHS.OtherAssetDetail}
          element={<OtherAssetDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
