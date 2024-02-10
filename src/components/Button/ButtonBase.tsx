import { forwardRef } from 'react';
import { Props } from './types';
import * as S from './ButtonBase.styled';

const ButtonBase = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <S.Base ref={ref} {...props}>
        {children}
      </S.Base>
    );
  },
);

export default ButtonBase;
