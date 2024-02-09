import TextButton from '@/components/Button/TextButton';
import * as S from './OtherAssetEditView.styled';
import { useParams } from 'react-router-dom';

export default function OtherAssetEditView() {
  const { id } = useParams<{ id: string }>();

  const isRegister = !id;

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
          <TextButton>등록하기</TextButton>
        ) : (
          <TextButton>수정하기</TextButton>
        )}
      </S.ButtonWrapper>
    </S.Container>
  );
}
