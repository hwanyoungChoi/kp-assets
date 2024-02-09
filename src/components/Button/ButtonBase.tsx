import { forwardRef } from 'react';
import { ButtonProps } from './types';
import * as S from './ButtonBase.styled';

const ButtonBase = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <S.Base ref={ref} {...props}>
        {children}
      </S.Base>
    );
  },
);

export default ButtonBase;
