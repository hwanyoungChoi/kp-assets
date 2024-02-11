import client from '@/lib/api/client';
import { AssetItem } from '@/types';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export type LiabilitiesReadResponse = AssetItem[];

export default function useLiabilities() {
  return useSuspenseQuery({
    queryKey: ['liabilities'],
    queryFn: () => client.get('/liabilities'),
    select: (res: AxiosResponse<LiabilitiesReadResponse>) => res.data,
  });
}
