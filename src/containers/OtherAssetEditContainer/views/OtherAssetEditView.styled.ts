import styled from '@emotion/styled';

export const Container = styled.form`
  padding: 0 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  flex: 1;
  padding: 0 9px;

  > h1 {
    padding: 26px 0 24px;
    color: #000;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
  }
`;

export const ButtonWrapper = styled.div`
  padding-bottom: max(16px, calc(env(safe-area-inset-bottom)));

  > button {
    width: 100%;
  }
`;
