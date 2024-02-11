import { toFormattedPrice } from '@/lib/utils';
import Accordion from '../components/Accordion';
import List from '../components/List';
import * as S from './OtherAssetListView.styled';
import useAssets from '@/hooks/queries/useAssets';
import useLiabilities from '@/hooks/queries/useLiabilities';
import TextButton from '@/components/Button/TextButton';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function OtherAssetListView() {
  const navigate = useNavigate();

  const { data: assets } = useAssets();
  const { data: liabilities } = useLiabilities();

  useEffect(() => {
    if (assets && liabilities) {
      const totalCount = assets.length + liabilities.length;

      if (!totalCount) {
        navigate('/other-asset-edit');
      }
    }
  }, [assets, liabilities, navigate]);

  const totalAssetsAmount =
    assets?.reduce((acc, item) => acc + item.amount, 0) || 0;
  const totalLiabilitiesAmount =
    liabilities?.reduce((acc, item) => acc + item.amount, 0) || 0;
  const totalAmount = totalAssetsAmount + totalLiabilitiesAmount;

  const handleEditButtonClick = () => {
    navigate(`/other-asset-edit`);
  };

  return (
    <S.Container>
      <S.TotalSection>
        기타 자산
        <em>{toFormattedPrice(totalAmount)}</em>
      </S.TotalSection>

      <S.ListContainer>
        <S.SectionDivider />

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
        <TextButton onClick={handleEditButtonClick}>기타 자산 등록</TextButton>
      </S.ButtonWrapper>
    </S.Container>
  );
}
