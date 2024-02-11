import ReactModal from 'react-modal';
import * as S from './BottomSheetModal.styled';
import {
  DEFAULT_REACT_MODAL_CONTENT_STYLE,
  DEFAULT_REACT_MODAL_OVERLAY_STYLE,
} from '@/lib/constants';
import React from 'react';
import IconCircleCloseLight from '@/assets/icon_circle_close_light.svg?react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function BottomSheetModal({
  isOpen,
  onClose,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        content: {
          ...DEFAULT_REACT_MODAL_CONTENT_STYLE,
          bottom: 0,
        },
        overlay: {
          ...DEFAULT_REACT_MODAL_OVERLAY_STYLE,
        },
      }}
    >
      <S.Content>
        <S.Header>
          <IconCircleCloseLight onClick={onClose} />
          <S.Title>분류</S.Title>
        </S.Header>
        <S.Body>{children}</S.Body>
      </S.Content>
    </ReactModal>
  );
}
