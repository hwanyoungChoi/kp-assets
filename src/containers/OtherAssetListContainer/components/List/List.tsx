import * as S from './List.styled';
import IconAssetsItem from '../../../../assets/icon_assets_item.svg?react';
import IconLiabilitiesItem from '../../../../assets/icon_liabilities_item.svg?react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../../lib/routes';
import { toFormattedPrice } from '../../../../lib/utils';

export default function List() {
  const navigate = useNavigate();

  const handleItemClick = (id: number) => {
    navigate(`${PATHS.OtherAssetDetail}`);
  };

  return (
    <ul>
      <S.ItemContainer onClick={() => handleItemClick(1)}>
        <IconAssetsItem />
        <S.ItemInfo>
          골드바
          <em>{toFormattedPrice(2500000)}</em>
        </S.ItemInfo>
      </S.ItemContainer>
    </ul>
  );
}
