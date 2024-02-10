import client from '@/lib/api/client';
import { AssetForm, AssetType } from '@/types';
import { useMutation } from '@tanstack/react-query';

export interface AssetCreateRequest {
  asset: AssetForm;
  type: AssetType;
}

export default function useAssetCreate() {
  return useMutation({
    mutationFn: ({ asset, type }: AssetCreateRequest) =>
      type === AssetType.Assets
        ? client.post('/assets', asset)
        : client.post('/liabilities', asset),
  });
}
