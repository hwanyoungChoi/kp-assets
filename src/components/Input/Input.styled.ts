import COLORS from '@/lib/colors';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div<{ isFocused?: boolean }>`
  height: 80px;
  padding: 17px 19px;
  border-radius: 16px;
  box-sizing: border-box;

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid ${COLORS.B10};
    `}
`;

export const Title = styled.div<{ isError?: boolean }>`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: ${(props) => (props.isError ? COLORS.R10 : '#000')};
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;

  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  color: ${COLORS.B20};
  border: none;
  outline: none;
  caret-color: ${COLORS.B20};

  ::placeholder {
    color: ${COLORS.B22};
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  bottom: -26px;
  background-color: ${COLORS.R10};

  padding: 4px 9px;
  border-radius: 6px;
  z-index: 1;

  color: #fff;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;

export const TooltipArrow = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: ${COLORS.R10} transparent transparent transparent;
`;
