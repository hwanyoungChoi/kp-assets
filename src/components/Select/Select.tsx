import { forwardRef, useRef, useState } from 'react';
import * as S from './Select.styled';
import { useForkRef } from 'rooks';
import IconTriangle from '@/assets/icon_triangle.svg?react';
import IconCheck from '@/assets/icon_check.svg?react';
import { AssetType } from '@/types';
import BottomSheetModal from '../BottomSheetModal';
import { ASSET_TYPE_KOR_MAP } from '@/lib/constants';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorMessage?: string;
}

const Select = forwardRef<HTMLInputElement, Props>(
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

    const [isOpenModal, setIsOpenModal] = useState(false);

    const [isFocused, setIsFocused] = useState(false);
    const hasValue = !!props.value;
    const isError = !!errorMessage && hasValue;

    const handleClick = () => {
      setIsFocused(true);
      setIsOpenModal(true);
    };

    const handleTypeItemClick = (type: AssetType) => {
      if (inputRef?.current) {
        inputRef.current.value = type;

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

      setIsOpenModal(false);
      setIsFocused(false);
    };

    const isAssets =
      props.value === AssetType.Assets ||
      ASSET_TYPE_KOR_MAP[props.value as string] === AssetType.Assets;
    const isLialibities =
      props.value === AssetType.Liabilities ||
      ASSET_TYPE_KOR_MAP[props.value as string] === AssetType.Liabilities;

    return (
      <>
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
                      if (!isOpenModal) {
                        setIsFocused(false);
                        onBlur(e);
                      }
                    }}
                  />
                </div>

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

          <IconTriangle />
        </S.Container>

        <BottomSheetModal
          isOpen={isOpenModal}
          onClose={() => {
            setIsFocused(false);
            setIsOpenModal(false);
          }}
        >
          <>
            <S.ModalBodyItem
              isSelected={isAssets}
              onClick={() => handleTypeItemClick(AssetType.Assets)}
            >
              자산
              {isAssets && <IconCheck />}
            </S.ModalBodyItem>
            <S.ModalBodyItem
              isSelected={isLialibities}
              onClick={() => handleTypeItemClick(AssetType.Liabilities)}
            >
              부채
              {isLialibities && <IconCheck />}
            </S.ModalBodyItem>
          </>
        </BottomSheetModal>
      </>
    );
  },
);

export default Select;
