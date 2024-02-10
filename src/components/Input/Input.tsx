import { forwardRef, useRef, useState } from 'react';
import * as S from './Input.styled';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ title, errorMessage, ...props }: Props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);

    const handleClick = () => {
      setIsFocused(true);

      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    return (
      <S.Container
        onClick={handleClick}
        isFocused={isFocused || !!errorMessage}
      >
        <S.Title isError={!!errorMessage}>{title}</S.Title>

        <S.InputWrapper>
          <S.Input ref={ref} {...props} onBlur={() => setIsFocused(false)} />
        </S.InputWrapper>
      </S.Container>
    );
  },
);

export default Input;
