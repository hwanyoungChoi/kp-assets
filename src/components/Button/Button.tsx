import { forwardRef } from 'react';
import { Props } from './types';
import * as S from './Button.styled';

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <S.Base ref={ref} {...props}>
        {children}
      </S.Base>
    );
  },
);

export default Button;
