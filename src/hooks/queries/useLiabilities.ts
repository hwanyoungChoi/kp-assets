import client from '@/lib/api/client';
import { AssetItem } from '@/types';
import { useQuery } from '@tanstack/react-query';

export type LiabilitiesReadResponse = AssetItem[];

export default function useLiabilities() {
  return useQuery<LiabilitiesReadResponse>({
    queryKey: ['liabilities'],
    queryFn: () => client.get('/liabilities'),
    select: (res: any) => res.data,
  });
}
