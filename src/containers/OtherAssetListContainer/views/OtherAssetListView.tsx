import { toFormattedPrice } from '../../../lib/utils';
import Accordion from '../components/Accordion';
import List from '../components/List';
import * as S from './OtherAssetListView.styled';

export default function OtherAssetListView() {
  return (
    <>
      <S.TotalSection>
        기타 자산
        <em>{toFormattedPrice(25000000)}</em>
      </S.TotalSection>

      <S.SectionDivider />

      <Accordion
        headerContent="자산"
        collpaseContent={toFormattedPrice(290000)}
      >
        <List />
      </Accordion>

      <Accordion
        headerContent="부채"
        collpaseContent={toFormattedPrice(-40000000)}
      >
        <List />
      </Accordion>

      <S.ButtonWrapper>
        <button>기타 자산 등록</button>
      </S.ButtonWrapper>
    </>
  );
}
