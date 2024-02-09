export enum AssetType {
  Assets = 'ASSETS',
  Liabilities = 'LIABILITIES',
}

export interface AssetItem {
  id: number;
  name: string;
  amount: number;
  type: 'ASSETS' | 'LIABILITIES';
  memo?: string;
}
