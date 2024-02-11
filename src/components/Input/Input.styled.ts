import COLORS from '@/lib/colors';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div<{ isFocused?: boolean }>`
  height: 80px;
  padding: 17px 19px;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid ${COLORS.N20};
    `}
`;

export const BigTitle = styled.div`
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  color: ${COLORS.N22};
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
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  > div {
    flex: 1;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  color: ${COLORS.N30};
  border: none;
  outline: none;
  caret-color: ${COLORS.N30};

  ::placeholder {
    color: ${COLORS.N32};
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  left: -2px;
  bottom: -28px;
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
  bottom: 100%;
  left: 8px;
  border-width: 5px 5px 6px;
  border-style: solid;
  border-color: transparent transparent ${COLORS.R10} transparent;
`;
