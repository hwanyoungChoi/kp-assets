import client from '@/lib/api/client';
import { Asset, AssetType } from '@/types';
import { useMutation } from '@tanstack/react-query';

export interface AssetUpdateRequest {
  id?: number | string;
  asset: Asset;
  type: AssetType;
}

export default function useAssetUpdate() {
  return useMutation({
    mutationFn: ({ id, asset, type }: AssetUpdateRequest) =>
      type === AssetType.Assets
        ? client.patch(`/assets/${id}`, asset)
        : client.patch(`/liabilities/${id}`, asset),
  });
}
