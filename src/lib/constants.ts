import { AssetType } from '@/types';
import COLORS from './colors';

export const ASSET_TYPE_MAP: { [TKey in AssetType]: string } = {
  [AssetType.Assets]: '자산',
  [AssetType.Liabilities]: '부채',
};

export const ASSET_TYPE_KOR_MAP: Record<string, string> = {
  자산: AssetType.Assets,
  부채: AssetType.Liabilities,
};

export const DEFAULT_REACT_MODAL_CONTENT_STYLE: React.CSSProperties = {
  inset: 'initial',
  border: 'none',
  outline: 'none',
  borderRadius: 0,
  padding: 0,
  backgroundColor: 'transparent',
  width: '100%',
  height: '100%',
  position: 'relative',
};

export const DEFAULT_REACT_MODAL_OVERLAY_STYLE: React.CSSProperties = {
  backgroundColor: COLORS.dim,
};
