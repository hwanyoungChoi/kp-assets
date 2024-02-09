import { useEffect } from 'react';
import OtherAssetListView from '../containers/OtherAssetListContainer/views/OtherAssetListView';

export default function OtherAssetListPage() {
  useEffect(() => {
    window.document.title = '기타 자산';
  }, []);

  return <OtherAssetListView />;
}
