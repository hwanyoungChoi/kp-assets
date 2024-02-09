import { toFormattedPrice } from '@/lib/utils';
import Accordion from '../components/Accordion';
import List from '../components/List';
import * as S from './OtherAssetListView.styled';
import useAssets from '@/hooks/queries/useAssets';
import useLiabilities from '@/hooks/queries/useLiabilities';
import TextButton from '@/components/Button/TextButton';

export default function OtherAssetListView() {
  const { data: assets } = useAssets();
  const { data: liabilities } = useLiabilities();

  const totalAssetsAmount =
    assets?.reduce((acc, item) => acc + item.amount, 0) || 0;
  const totalLiabilitiesAmount =
    liabilities?.reduce((acc, item) => acc + item.amount, 0) || 0;
  const totalAmount = totalAssetsAmount + totalLiabilitiesAmount;

  return (
    <S.Container>
      <S.TotalSection>
        기타 자산
        <em>{toFormattedPrice(totalAmount)}</em>
      </S.TotalSection>

      <S.SectionDivider />

      <S.ListContainer>
        <Accordion
          headerContent="자산"
          collpaseContent={toFormattedPrice(totalAssetsAmount)}
          hideCollapseIcon={!assets?.length}
        >
          <List items={assets} />
        </Accordion>

        <Accordion
          headerContent="부채"
          collpaseContent={toFormattedPrice(totalLiabilitiesAmount)}
          hideCollapseIcon={!liabilities?.length}
        >
          <List items={liabilities} />
        </Accordion>
      </S.ListContainer>

      <S.ButtonWrapper>
        <TextButton>기타 자산 등록</TextButton>
      </S.ButtonWrapper>
    </S.Container>
  );
}
