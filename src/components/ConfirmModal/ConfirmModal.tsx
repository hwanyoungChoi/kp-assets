import ReactModal from 'react-modal';
import {
  DEFAULT_REACT_MODAL_CONTENT_STYLE,
  DEFAULT_REACT_MODAL_OVERLAY_STYLE,
} from '@/lib/constants';
import Button from '../Button/Button';
import * as S from './ConfirmModal.styled';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string | React.ReactNode;
  message: string | React.ReactNode;
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}: Props) {
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        content: {
          ...DEFAULT_REACT_MODAL_CONTENT_STYLE,
        },
        overlay: {
          ...DEFAULT_REACT_MODAL_OVERLAY_STYLE,
        },
      }}
    >
      <S.Container>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Message>{message}</S.Message>
          <S.Footer>
            <Button
              width="100%"
              size="small"
              style={{ fontWeight: 400 }}
              onClick={onClose}
            >
              아니오
            </Button>
            <Button
              width="100%"
              size="small"
              variant="primary"
              onClick={onConfirm}
            >
              예
            </Button>
          </S.Footer>
        </S.Content>

        <S.CustomTextButton onClick={onClose}>취소</S.CustomTextButton>
      </S.Container>
    </ReactModal>
  );
}
