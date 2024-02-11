import { forwardRef, useEffect, useRef, useState } from 'react';
import * as S from './Input.styled';
import { useForkRef } from 'rooks';
import IconCircleClose from '@/assets/icon_circle_close.svg?react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      title,
      errorMessage,
      onFocus = () => null,
      onBlur = () => null,
      onChange,
      ...props
    }: Props,
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const forkedRef = useForkRef(ref, inputRef);

    const [isFocused, setIsFocused] = useState(false);
    const hasValue = !!props.value;
    const isError = !!errorMessage && hasValue;

    useEffect(() => {
      if (isFocused || hasValue) {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    }, [hasValue, isFocused]);

    const handleClick = () => {
      setIsFocused(true);
    };

    const handleClearButtonClick = () => {
      if (inputRef?.current) {
        inputRef.current.value = '';
        inputRef.current.focus();

        const changeEvent = new KeyboardEvent('change');
        inputRef.current.dispatchEvent(changeEvent);

        if (typeof onChange === 'function') {
          onChange(
            changeEvent as unknown as React.ChangeEvent<HTMLInputElement>,
          );
        }

        const inputEvent = new InputEvent('input');
        inputRef.current.dispatchEvent(inputEvent);
      }
    };

    return (
      <S.Container onClick={handleClick} isFocused={isFocused || isError}>
        {isFocused || hasValue ? (
          <>
            <S.InputWrapper>
              <div>
                <S.Title isError={isError}>{title}</S.Title>
                <S.Input
                  ref={forkedRef}
                  {...props}
                  readOnly={!isFocused}
                  onChange={onChange}
                  onFocus={(e) => {
                    onFocus(e);
                  }}
                  onBlur={(e) => {
                    setIsFocused(false);
                    onBlur(e);
                  }}
                />
              </div>

              {isFocused && hasValue && (
                <IconCircleClose
                  onClick={handleClearButtonClick}
                  onMouseDown={(e) => e.preventDefault()}
                />
              )}

              {isError && (
                <S.Tooltip>
                  {errorMessage}
                  <S.TooltipArrow />
                </S.Tooltip>
              )}
            </S.InputWrapper>
          </>
        ) : (
          <S.BigTitle>{title}</S.BigTitle>
        )}
      </S.Container>
    );
  },
);

export default Input;
