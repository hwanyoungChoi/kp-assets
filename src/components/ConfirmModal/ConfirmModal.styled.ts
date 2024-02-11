import COLORS from '@/lib/colors';
import styled from '@emotion/styled';
import TextButton from '../Button/TextButton';

export const Container = styled.div`
  text-align: center;
  position: absolute;
  margin-top: 56px;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

export const Content = styled.div`
  width: 311px;
  background-color: #fff;
  border-radius: 32px;
  padding-top: 32px;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: ${COLORS.B10};
`;

export const Message = styled.div`
  padding: 10px 16px 26px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.B10};
`;

export const Footer = styled.div`
  padding: 0 15px 16px;
  display: flex;
  gap: 8px;
`;

export const CustomTextButton = styled(TextButton)`
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  margin-top: 36px;
`;
