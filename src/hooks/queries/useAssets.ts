import client from '@/lib/api/client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AssetItem } from '@/types';
import { AxiosResponse } from 'axios';

export type AssetsReadResponse = AssetItem[];

export default function useAssets() {
  return useSuspenseQuery({
    queryKey: ['assets'],
    queryFn: () => client.get('/assets'),
    select: (res: AxiosResponse<AssetsReadResponse>) => res.data,
  });
}
