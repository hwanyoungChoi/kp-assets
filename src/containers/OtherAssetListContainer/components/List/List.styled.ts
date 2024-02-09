import styled from '@emotion/styled';
import COLORS from '@/lib/colors';

export const ItemContainer = styled.li`
  padding: 17px 0;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${COLORS.B21};

  > em {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: ${COLORS.B10};
  }
`;
