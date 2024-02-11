import styled from '@emotion/styled';
import ButtonBase from './ButtonBase';
import COLORS from '@/lib/colors';

export const Base = styled(ButtonBase)`
  color: ${COLORS.N21};
  text-decoration: underline;
  text-underline-offset: 6px;

  font-size: 16px;
  line-height: 24px;
`;
