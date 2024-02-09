import { toFormattedPrice } from '@/lib/utils';
import * as S from './OtherAssetDetailView.styled';
import { useLocation, useParams } from 'react-router-dom';
import useAsset from '@/hooks/queries/useAsset';
import { AssetType } from '@/types';
import { ASSET_TYPE_MAP } from '@/lib/constants';

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
          <em>{detail?.memo}</em>
        </S.Info>
      </S.InnerContainer>

      <S.ButtonWrapper>
        <button>삭제하기</button>
        <button>수정하기</button>
      </S.ButtonWrapper>
    </S.Container>
  );
}
