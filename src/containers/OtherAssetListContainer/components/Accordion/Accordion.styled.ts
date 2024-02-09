import styled from '@emotion/styled';
import COLORS from '../../../../lib/colors';

export const Container = styled.div`
  padding: 0 24px;
`;

export const Header = styled.div`
  padding-top: 40px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Collapse = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7px;

  font-size: 18px;
  line-height: 26px;
  font-weight: 500;
  color: ${COLORS.B10};
`;

export const CollapseIconWrapper = styled.div<{ isOpen: boolean }>`
  transform: ${(props) => !props.isOpen && 'rotate(-180deg)'};
  transition: all ease 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.div`
  height: 16px;
  border-bottom: 1px solid ${COLORS.N11};
`;
