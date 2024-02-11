import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ButtonBase from './ButtonBase';
import COLORS from '@/lib/colors';

export const Base = styled(ButtonBase)`
  position: relative;
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

export const Layer = styled.div`
  position: absolute;
  top: 0;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.68);
  z-index: 1;
`;
