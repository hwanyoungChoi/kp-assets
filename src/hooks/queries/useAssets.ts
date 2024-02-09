import client from '@/lib/api/client';
import { useQuery } from '@tanstack/react-query';
import { AssetItem } from '@/types';

export type AssetsReadResponse = AssetItem[];

export default function useAssets() {
  return useQuery<AssetsReadResponse>({
    queryKey: ['assets'],
    queryFn: () => client.get('/assets'),
    select: (res: any) => res.data,
  });
}
