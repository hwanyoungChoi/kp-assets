import * as S from './List.styled';
import IconAssetsItem from '@/assets/icon_assets_item.svg?react';
import IconLiabilitiesItem from '@/assets/icon_liabilities_item.svg?react';
import { useNavigate } from 'react-router-dom';
import { toFormattedPrice } from '@/lib/utils';
import { AssetItem } from '@/types';

interface Props {
  items?: AssetItem[];
}

export default function List({ items }: Props) {
  const navigate = useNavigate();

  const handleItemClick = (item: AssetItem) => {
    navigate(`/other-asset-detail/${item.id}?type=${item.type}`);
  };

  return (
    <ul>
      {items?.map((item) => (
        <S.ItemContainer key={item.id} onClick={() => handleItemClick(item)}>
          {item.type === 'ASSETS' ? (
            <IconAssetsItem />
          ) : (
            <IconLiabilitiesItem />
          )}

          <S.ItemInfo>
            {item.name}
            <em>{toFormattedPrice(item.amount)}</em>
          </S.ItemInfo>
        </S.ItemContainer>
      ))}
    </ul>
  );
}
