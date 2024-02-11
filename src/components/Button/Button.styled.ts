import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ButtonBase from './ButtonBase';
import COLORS from '@/lib/colors';

export const Base = styled(ButtonBase)`
  background-color: transparent;
  border: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  border-radius: 30px;

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.32;
    `}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          font-size: 16px;
          line-height: 24px;
          font-weight: 700;
          height: 53px;
        `;
      // Medium
      default:
        return css`
          font-size: 18px;
          line-height: 26px;
          font-weight: 700;
          height: 60px;
        `;
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${COLORS.Y10};
          color: ${COLORS.N20};
        `;
      // Default
      default:
        return css`
          background-color: #e9ecef;
          color: #212529;
        `;
    }
  }}
`;
