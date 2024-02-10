import { toFormattedPrice } from '@/lib/utils';
import * as S from './OtherAssetDetailView.styled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAsset from '@/hooks/queries/useAsset';
import { AssetType } from '@/types';
import { ASSET_TYPE_MAP } from '@/lib/constants';
import TextButton from '@/components/Button/TextButton';
import IconChevronRight from '@/assets/icon_chevron_right.svg?react';
import useAssetDelete from '@/hooks/mutations/useAssetDelete';

export default function OtherAssetDetailView() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);
  const type = queryParams.get('type') as AssetType;

  const { data: detail } = useAsset({ id, type });
  const deleteAsset = useAssetDelete();

  const handleDeleteButtonClick = async () => {
    if (!window.confirm('자산을 삭제할까요?')) {
      return;
    }

    try {
      await deleteAsset.mutateAsync({ id, type });
      navigate(-1);
    } catch {
      window.alert('오류발생');
    }
  };

  const handleEditButtonClick = () => {
    navigate(`/other-asset-edit/${id}`, {
      state: {
        form: detail,
      },
    });
  };

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
              <S.EditButton onClick={handleEditButtonClick}>
                입력하기
              </S.EditButton>
              <IconChevronRight />
            </S.EditButtonWrapper>
          )}
        </S.Info>
      </S.InnerContainer>

      <S.ButtonWrapper>
        <TextButton onClick={handleDeleteButtonClick}>삭제하기</TextButton>
        <TextButton onClick={handleEditButtonClick}>수정하기</TextButton>
      </S.ButtonWrapper>
    </S.Container>
  );
}
