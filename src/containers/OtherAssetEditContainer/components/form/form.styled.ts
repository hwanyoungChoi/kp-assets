import COLORS from '@/lib/colors';
import styled from '@emotion/styled';

export const Container = styled.div`
  border-radius: 16px;
  border: 1px solid ${COLORS.N11};

  width: 100%;
  height: 320px;
  box-sizing: border-box;
`;

export const Divider = styled.div`
  background-color: ${COLORS.N11};
  height: 0.5px;
  width: calc(100% - 50px);
  margin: 0 auto;
`;
