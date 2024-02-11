import * as S from './OtherAssetEditView.styled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAssetCreate from '@/hooks/mutations/useAssetCreate';
import useAssetUpdate from '@/hooks/mutations/useAssetUpdate';
import { AssetForm, AssetType } from '@/types';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '../components/form';
import { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import { toFormattedPrice } from '@/lib/utils';
import { ASSET_TYPE_MAP } from '@/lib/constants';

const SCHEMA = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(2, '최소 2자부터 입력 가능해요')
    .max(20, '최대 20자까지 입력 가능해요'),
  type: yup.string().required('필수 선택해 주세요'),
  amount: yup.string().required(),
  memo: yup
    .string()
    .min(2, '최소 2자를 입력해 주세요')
    .max(30, '최대 30자까지 입력 가능해요')
    .nullable()
    .transform((value) => (value ? value : undefined)),
});

const toParams = (asset: AssetForm) => {
  let amount;
  if (typeof asset.amount === 'string') {
    const sanitizedAmount = asset.amount.replace(/[^\d.-]/g, '');
    amount = Number(sanitizedAmount);
  } else {
    amount = asset.amount;
  }

  let type;
  if (asset.type === '자산' || asset.type === AssetType.Assets) {
    type = AssetType.Assets;
  } else {
    type = AssetType.Liabilities;
  }

  return {
    ...asset,
    amount,
    type,
    memo: asset.memo || undefined,
  };
};

export default function OtherAssetEditView() {
  const [buttonHeight, setButtonHeight] = useState(0);

  useEffect(() => {
    const handleResize = (e: any) => {
      const visualViewportHeight = e.target.height;
      const innerHeight = window.innerHeight;

      if (innerHeight - visualViewportHeight > 0) {
        setButtonHeight(innerHeight - visualViewportHeight);
      } else {
        setButtonHeight(0);
      }
    };

    visualViewport?.addEventListener('resize', handleResize);

    window.addEventListener(
      'touchmove',
      () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.document.activeElement?.blur();
      },
      false,
    );

    return () => {
      visualViewport?.removeEventListener('resize', handleResize);
    };
  }, []);

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
      reset({
        ...state.form,
        amount: toFormattedPrice(state.form.amount),
        type: ASSET_TYPE_MAP[state.form.type as AssetType],
      });
    }
  }, [reset, state]);

  const createAsset = useAssetCreate();
  const updateAsset = useAssetUpdate();

  const onCreate = async (asset: AssetForm) => {
    try {
      await createAsset.mutateAsync({
        asset: toParams(asset),
        type: toParams(asset).type as AssetType,
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

        <S.ButtonWrapper buttonHeight={buttonHeight}>
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
