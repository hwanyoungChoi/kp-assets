import { AssetType } from '@/types';

export const ASSET_TYPE_MAP: { [TKey in AssetType]: string } = {
  [AssetType.Assets]: '자산',
  [AssetType.Liabilities]: '부채',
};
