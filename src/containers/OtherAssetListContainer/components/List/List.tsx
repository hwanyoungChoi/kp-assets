import * as S from './List.styled';
import IconAssetsItem from '../../../../assets/icon_assets_item.svg?react';
import IconLiabilitiesItem from '../../../../assets/icon_liabilities_item.svg?react';

export default function List() {
  return (
    <ul>
      <S.ItemContainer>
        <IconAssetsItem />
        <S.ItemInfo>
          골드바
          <em>2500000원</em>
        </S.ItemInfo>
      </S.ItemContainer>
    </ul>
  );
}
