import client from '@/lib/api/client';
import { AssetItem, AssetType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export type AssetReadResponse = AssetItem[];

export interface Props {
  id?: number | string;
  type?: AssetType;
}

export default function useAsset({ id, type }: Props) {
  return useQuery({
    queryKey: ['asset', id],
    queryFn: () =>
      type === AssetType.Assets
        ? client.get(`/assets`, { params: { id } })
        : client.get('/liabilities', { params: { id } }),
    select: (res: AxiosResponse<AssetReadResponse>) => res.data?.[0],
    enabled: !!id && !!type,
  });
}
