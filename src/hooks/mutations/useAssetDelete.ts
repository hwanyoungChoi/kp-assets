import client from '@/lib/api/client';
import { AssetType } from '@/types';
import { useMutation } from '@tanstack/react-query';

export interface AssetDeleteRequest {
  id?: number | string;
  type: AssetType;
}

export default function useAssetDelete() {
  return useMutation({
    mutationFn: ({ id, type }: AssetDeleteRequest) =>
      type === AssetType.Assets
        ? client.delete(`/assets/${id}`)
        : client.delete(`/liabilities/${id}`),
  });
}
