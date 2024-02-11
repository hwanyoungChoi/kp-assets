export enum AssetType {
  Assets = 'ASSETS',
  Liabilities = 'LIABILITIES',
}

export interface Asset {
  name: string;
  amount: number;
  type: 'ASSETS' | 'LIABILITIES';
  memo?: string;
}

export interface AssetItem extends Asset {
  id: number;
}

export interface AssetForm {
  name: string;
  amount: string;
  type?: string;
  memo?: string | null;
}
