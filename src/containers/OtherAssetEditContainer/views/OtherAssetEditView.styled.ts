import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0 16px;
  height: 100vh;
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

export const InputContainer = styled.div`
  padding: 0 1px;
  border-radius: 16px;
  border: 1px solid black;

  width: 100%;
  height: 320px;
`;

export const ButtonWrapper = styled.div`
  padding-bottom: max(16px, calc(env(safe-area-inset-bottom)));

  > button {
    width: 100%;
  }
`;
