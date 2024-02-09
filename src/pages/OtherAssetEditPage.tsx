import OtherAssetEditView from '@/containers/OtherAssetEditContainer/views/OtherAssetEditView';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function OtherAssetEditPage() {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const actionType = id ? '수정' : '등록';
    window.document.title = `기타 자산 ${actionType}`;
  }, [id]);

  return <OtherAssetEditView />;
}
