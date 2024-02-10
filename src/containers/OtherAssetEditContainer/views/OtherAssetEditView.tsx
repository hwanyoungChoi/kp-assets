import TextButton from '@/components/Button/TextButton';
import * as S from './OtherAssetEditView.styled';
import { useNavigate, useParams } from 'react-router-dom';
import useAssetCreate from '@/hooks/mutations/useAssetCreate';
import useAssetUpdate from '@/hooks/mutations/useAssetUpdate';
import { AssetType } from '@/types';

export default function OtherAssetEditView() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const isRegister = !id;

  const createAsset = useAssetCreate();
  const updateAsset = useAssetUpdate();

  const handleCreateButtonClick = async () => {
    try {
      await createAsset.mutateAsync({
        asset: {
          name: 'test',
          amount: 33333333,
          type: 'ASSETS',
          memo: 'ddd',
        },
        type: AssetType.Assets,
      });

      navigate(-1);
    } catch {
      window.alert('오류 발생');
    }
  };

  const handleUpdateButtonClick = async () => {
    try {
      await updateAsset.mutateAsync({
        id: 951,
        asset: {
          name: 'hello',
          amount: 100,
          type: 'ASSETS',
          memo: 'aa',
        },
        type: AssetType.Assets,
      });

      navigate(-1);
    } catch {
      window.alert('오류 발생');
    }
  };

  return (
    <S.Container>
      <S.InnerContainer>
        <h1>
          현금부터 실물 자산까지
          <br />
          직접 등록해 보세요
        </h1>

        <S.InputContainer />
      </S.InnerContainer>

      <S.ButtonWrapper>
        {isRegister ? (
          <TextButton onClick={handleCreateButtonClick}>등록하기</TextButton>
        ) : (
          <TextButton onClick={handleUpdateButtonClick}>수정하기</TextButton>
        )}
      </S.ButtonWrapper>
    </S.Container>
  );
}
