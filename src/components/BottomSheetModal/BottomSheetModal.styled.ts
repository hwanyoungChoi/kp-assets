import COLORS from '@/lib/colors';
import styled from '@emotion/styled';

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Header = styled.div`
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background-color: #fff;
  height: 88px;
  padding: 16px 20px;
  box-sizing: border-box;
  text-align: right;
`;

export const Title = styled.div`
  padding: 4px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  color: ${COLORS.B10};
  text-align: left;
`;

export const Body = styled.div`
  background-color: #fff;
  padding: 0 24px;
  height: 137px;
  padding-bottom: max(0, calc(env(safe-area-inset-bottom)));
`;
