import { toFormattedPrice } from '@/lib/utils';
import * as S from './OtherAssetDetailView.styled';

export default function OtherAssetDetailView() {
  return (
    <S.Container>
      <S.InnerContainer>
        <S.Title>골드바fdsuaf8dsau9f8dsau89fdusa98fudsa98udsf98</S.Title>

        <S.Info>
          분류
          <em>자산</em>
        </S.Info>
        <S.Info>
          자산가치
          <em>{toFormattedPrice(2500000000)}</em>
        </S.Info>
        <S.Info>
          메모
          <em>줄바꿈 필요 길fdsjiofdsjiofjsaiofjdosiajfoidsajfoisjaoifdsa3</em>
        </S.Info>
      </S.InnerContainer>

      <S.ButtonWrapper>
        <button>삭제하기</button>
        <button>수정하기</button>
      </S.ButtonWrapper>
    </S.Container>
  );
}
