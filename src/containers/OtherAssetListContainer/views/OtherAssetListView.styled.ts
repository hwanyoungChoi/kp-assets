import styled from '@emotion/styled';
import COLORS from '@/lib/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const TotalSection = styled.div`
  padding: 24px 24px 36px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  color: ${COLORS.B10};
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;

  > em {
    font-size: 32px;
    line-height: 44px;
    font-weight: 500;
  }
  word-break: break-all;
`;

export const SectionDivider = styled.div`
  background-color: ${COLORS.N10};
  height: 15px;
`;

export const ListContainer = styled.div`
  flex: 1;
`;

export const ButtonWrapper = styled.div`
  padding: 35px 0;
  text-align: center;
`;
