import Accordion from '../components/Accordion';
import List from '../components/List';
import * as S from './OtherAssetListView.styled';

export default function OtherAssetListView() {
  return (
    <>
      <S.TotalSection>
        기타 자산
        <em>25000000원</em>
      </S.TotalSection>

      <S.SectionDivider />

      <Accordion headerContent="자산" collpaseContent="290000000000원">
        <List />
      </Accordion>

      <Accordion headerContent="부채" collpaseContent="-40000000원">
        <List />
      </Accordion>

      <S.ButtonWrapper>
        <button>기타 자산 등록</button>
      </S.ButtonWrapper>
    </>
  );
}
