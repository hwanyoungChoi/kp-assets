import client from '@/lib/api/client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AssetItem } from '@/types';

export type AssetsReadResponse = AssetItem[];

export default function useAssets() {
  return useSuspenseQuery<AssetsReadResponse>({
    queryKey: ['assets'],
    queryFn: () => client.get('/assets'),
    select: (res: any) => res.data,
  });
}
