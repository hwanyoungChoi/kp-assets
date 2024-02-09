import { toFormattedPrice } from '@/lib/utils';
import * as S from './OtherAssetDetailView.styled';
import { useLocation, useParams } from 'react-router-dom';
import useAsset from '@/hooks/queries/useAsset';
import { AssetType } from '@/types';
import { ASSET_TYPE_MAP } from '@/lib/constants';
import TextButton from '@/components/Button/TextButton';
import IconChevronRight from '@/assets/icon_chevron_right.svg?react';

export default function OtherAssetDetailView() {
  const { id } = useParams<{ id: string }>();
  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);
  const type = queryParams.get('type') as AssetType;

  const { data: detail } = useAsset({ id, type });

  return (
    <S.Container>
      <S.InnerContainer>
        <S.Title>{detail?.name}</S.Title>

        <S.Info>
          분류
          <em>{ASSET_TYPE_MAP[type]}</em>
        </S.Info>
        <S.Info>
          자산가치
          <em>{toFormattedPrice(detail?.amount)}</em>
        </S.Info>
        <S.Info>
          메모
          {detail?.memo ? (
            <em>{detail?.memo}</em>
          ) : (
            <S.EditButtonWrapper>
              <S.EditButton>입력하기</S.EditButton>
              <IconChevronRight />
            </S.EditButtonWrapper>
          )}
        </S.Info>
      </S.InnerContainer>

      <S.ButtonWrapper>
        <TextButton>삭제하기</TextButton>
        <TextButton>수정하기</TextButton>
      </S.ButtonWrapper>
    </S.Container>
  );
}
