import client from '@/lib/api/client';
import { Asset, AssetType } from '@/types';
import { useMutation } from '@tanstack/react-query';

export interface AssetCreateRequest {
  asset: Asset;
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
