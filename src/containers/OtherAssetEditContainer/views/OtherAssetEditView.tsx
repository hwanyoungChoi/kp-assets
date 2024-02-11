import * as S from './OtherAssetEditView.styled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAssetCreate from '@/hooks/mutations/useAssetCreate';
import useAssetUpdate from '@/hooks/mutations/useAssetUpdate';
import { AssetForm, AssetType } from '@/types';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '../components/form';
import { useEffect } from 'react';
import Button from '@/components/Button/Button';

const SCHEMA = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(2, '최소 2자부터 입력 가능해요')
    .max(20, '최대 20자까지 입력 가능해요'),
  type: yup
    .mixed<AssetType>()
    .oneOf(Object.values(AssetType))
    .required('필수 선택해 주세요'),
  amount: yup.string(),
  memo: yup
    .string()
    .min(2, '최소 2자를 입력해 주세요')
    .max(30, '최대 30자까지 입력 가능해요')
    .nullable()
    .transform((value) => (value ? value : undefined)),
});

const toParams = (asset: AssetForm) => {
  return {
    ...asset,
    amount: Number(asset.amount),
    type: asset.type as AssetType,
    memo: asset.memo || undefined,
  };
};

export default function OtherAssetEditView() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const isNew = !id;

  const { state } = useLocation();

  const methods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(SCHEMA),
  });
  const {
    handleSubmit,
    reset,
    watch,
    formState: { isValid, isDirty },
  } = methods;

  const { name, type, amount } = watch();
  const enableRegister = !!name && !!type && !!amount;

  useEffect(() => {
    if (state?.form) {
      reset(state.form);
    }
  }, [reset, state]);

  const createAsset = useAssetCreate();
  const updateAsset = useAssetUpdate();

  const onCreate = async (asset: AssetForm) => {
    try {
      await createAsset.mutateAsync({
        asset: toParams(asset),
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
        asset: toParams(asset),
        type: state?.form?.type as AssetType,
      });

      navigate(-1);
    } catch {
      window.alert('오류 발생');
    }
  };

  return (
    <FormProvider {...methods}>
      <S.Container onSubmit={handleSubmit(isNew ? onCreate : onUpdate)}>
        <S.InnerContainer>
          <h1>
            현금부터 실물 자산까지
            <br />
            직접 등록해 보세요
          </h1>

          <Form />
        </S.InnerContainer>

        <S.ButtonWrapper>
          <Button
            type="submit"
            width="100%"
            variant="primary"
            disabled={(!enableRegister && !isValid) || !isDirty}
          >
            {isNew ? '등록하기' : '수정하기'}
          </Button>
        </S.ButtonWrapper>
      </S.Container>
    </FormProvider>
  );
}
