import client from '@/lib/api/client';
import { AssetItem } from '@/types';
import { useSuspenseQuery } from '@tanstack/react-query';

export type LiabilitiesReadResponse = AssetItem[];

export default function useLiabilities() {
  return useSuspenseQuery<LiabilitiesReadResponse>({
    queryKey: ['liabilities'],
    queryFn: () => client.get('/liabilities'),
    select: (res: any) => res.data,
  });
}
