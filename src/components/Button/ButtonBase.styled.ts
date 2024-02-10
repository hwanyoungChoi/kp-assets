import styled from '@emotion/styled';
import { ButtonProps } from './types';
import { css } from '@emotion/react';

export const Base = styled.button<ButtonProps>`
  background-color: transparent;
  border: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;
