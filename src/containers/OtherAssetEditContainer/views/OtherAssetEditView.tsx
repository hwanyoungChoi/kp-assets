import TextButton from '@/components/Button/TextButton';
import * as S from './OtherAssetEditView.styled';
import { useNavigate, useParams } from 'react-router-dom';
import useAssetCreate from '@/hooks/mutations/useAssetCreate';
import useAssetUpdate from '@/hooks/mutations/useAssetUpdate';
import { AssetForm, AssetType } from '@/types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const SCHEMA = yup.object().shape({
  name: yup
    .string()
    .required('최소 1자를 입력해주세요')
    .min(2, '최소 2자부터 입력 가능해요')
    .max(20, '최대 20자까지 입력 가능해요'),
  type: yup
    .mixed<AssetType>()
    .oneOf(Object.values(AssetType))
    .required('필수 선택해 주세요'),
  amount: yup
    .number()
    .required('필수 입력해 주세요')
    .max(1000000000, '최대 입력 금액을 초과했어요'),
  memo: yup
    .string()
    .min(2, '최소 2자를 입력해 주세요')
    .max(30, '최대 30자까지 입력 가능해요'),
});

export default function OtherAssetEditView() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const isRegister = !id;

  const createAsset = useAssetCreate();
  const updateAsset = useAssetUpdate();

  const onCreate = async (asset: AssetForm) => {
    try {
      await createAsset.mutateAsync({
        asset,
        type: asset.type as AssetType,
      });

      navigate(-1);
    } catch {
      window.alert('오류 발생');
    }
  };

  const onUpdate = async (asset: AssetForm) => {
    try {
      await updateAsset.mutateAsync({
        id,
        asset,
        type: asset.type as AssetType,
      });

      navigate(-1);
    } catch {
      window.alert('오류 발생');
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(SCHEMA) });

  return (
    <S.Container>
      <S.InnerContainer>
        <h1>
          현금부터 실물 자산까지
          <br />
          직접 등록해 보세요
        </h1>

        <S.InputContainer>
          <input {...register('name')} />
          <br />
          <input {...register('type')} />
          <br />
          <input {...register('amount')} />
          <br />
          <input {...register('memo')} />
        </S.InputContainer>
      </S.InnerContainer>

      <S.ButtonWrapper>
        {isRegister ? (
          <TextButton onClick={handleSubmit(onCreate)}>등록하기</TextButton>
        ) : (
          <TextButton onClick={handleSubmit(onUpdate)}>수정하기</TextButton>
        )}
      </S.ButtonWrapper>
    </S.Container>
  );
}
