import { useEffect } from 'react';
import OtherAssetDetailView from '../containers/OtherAssetDetailContainer/views/OtherAssetDetailView';

export default function OtherAssetDetailPage() {
  useEffect(() => {
    window.document.title = '상세';
  }, []);

  return <OtherAssetDetailView />;
}
