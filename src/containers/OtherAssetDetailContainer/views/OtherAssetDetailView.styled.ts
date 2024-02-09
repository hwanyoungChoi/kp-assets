import styled from '@emotion/styled';
import COLORS from '@/lib/colors';

export const Container = styled.div`
  padding: 0 24px;
  word-break: break-all;
`;

export const Title = styled.div`
  padding: 24px 0 40px;
  font-size: 24px;
  line-height: 34px;
  font-weight: 700;
  color: #000;
`;

export const Info = styled.div`
  padding: 8px 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${COLORS.B20};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  > em {
    max-width: 253px;
    font-weight: 700;
    text-align: right;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 35px 0;
  text-align: center;

  > button + button {
    margin-left: 31px;
  }
`;
