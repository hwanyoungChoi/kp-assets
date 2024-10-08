import { useFormContext } from 'react-hook-form';
import * as S from './Form.styled';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { AssetType } from '@/types';
import { ASSET_TYPE_KOR_MAP, ASSET_TYPE_MAP } from '@/lib/constants';

export default function Form() {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const { name, amount, type, memo } = watch();

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const typeString = ASSET_TYPE_MAP[e.target.value as AssetType];
    setValue('type', typeString, { shouldDirty: true });

    // 선택한 type에 따라 금액 부호를 바꾼다.
    if (!amount) return;

    const isLiability =
      ASSET_TYPE_KOR_MAP[typeString] === AssetType.Liabilities;
    const isNegative = amount.startsWith('-');

    if (isLiability && !isNegative) {
      setValue('amount', `-${amount}`);
    } else if (!isLiability && isNegative) {
      setValue('amount', amount.replace(/-/g, ''));
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    if (!value) {
      setValue('amount', '');
      return;
    }

    if (
      ASSET_TYPE_KOR_MAP[type] === AssetType.Liabilities ||
      type === AssetType.Liabilities
    ) {
      setValue('amount', `-${formattedValue}원`, { shouldDirty: true });
      return;
    }

    setValue('amount', `${formattedValue}원`, { shouldDirty: true });
  };

  const handleAmountKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && amount.endsWith('원')) {
      const newValue = amount.slice(0, -1);
      setValue('amount', newValue, { shouldDirty: true });
    }
  };

  return (
    <S.Container>
      <Input
        {...register('name')}
        title="자산명"
        value={name || ''}
        placeholder="예) 현금, 금, 빌려준 돈"
        errorMessage={errors?.name?.message as string}
      />
      <S.Divider />
      <Select
        {...register('type')}
        title="분류"
        value={type || ''}
        placeholder="선택하세요"
        errorMessage={errors?.type?.message as string}
        onChange={handleTypeChange}
      />
      <S.Divider />
      <Input
        {...register('amount')}
        title="자산가치"
        value={amount || ''}
        placeholder="금액을 입력하세요"
        errorMessage={errors?.amount?.message as string}
        inputMode="numeric"
        onChange={handleAmountChange}
        onKeyDown={handleAmountKeyDown}
      />
      <S.Divider />
      <Input
        {...register('memo')}
        title="메모"
        value={memo || ''}
        placeholder="메모를 입력하세요"
        errorMessage={errors?.memo?.message as string}
      />
    </S.Container>
  );
}
