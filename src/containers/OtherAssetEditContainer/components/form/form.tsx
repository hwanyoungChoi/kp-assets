import { useFormContext } from 'react-hook-form';
import * as S from './form.styled';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { AssetType } from '@/types';

export default function Form() {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const { amount, type } = watch();

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('type', e.target.value);

    if (amount) {
      setValue('amount', -amount);
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');

    if (type === AssetType.Liabilities) {
      setValue('amount', -value);
      return;
    }

    setValue('amount', value);
  };

  return (
    <S.Container>
      <Input
        {...register('name')}
        title="자산명"
        value={watch('name') || ''}
        placeholder="예) 현금, 금, 빌려준 돈"
        errorMessage={errors?.name?.message as string}
      />
      <S.Divider />
      <Select
        {...register('type')}
        title="분류"
        value={watch('type') || ''}
        placeholder="선택하세요"
        errorMessage={errors?.type?.message as string}
        onChange={handleTypeChange}
      />
      <S.Divider />
      <Input
        {...register('amount')}
        title="자산가치"
        value={watch('amount') || ''}
        placeholder="금액을 입력하세요"
        errorMessage={errors?.amount?.message as string}
        inputMode="numeric"
        onChange={handleAmountChange}
      />
      <S.Divider />
      <Input
        {...register('memo')}
        title="메모"
        value={watch('memo') || ''}
        placeholder="메모를 입력하세요"
        errorMessage={errors?.memo?.message as string}
      />
    </S.Container>
  );
}
