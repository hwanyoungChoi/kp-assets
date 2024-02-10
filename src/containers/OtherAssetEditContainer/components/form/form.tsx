import { useFormContext } from 'react-hook-form';
import * as S from './form.styled';
import Input from '@/components/Input';

export default function Form() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <S.Container>
      <Input
        {...register('name')}
        title="자산명"
        placeholder="예) 현금, 금, 빌려준 돈"
        errorMessage={errors?.name?.message as string}
      />
      <S.Divider />
      <Input
        {...register('type')}
        title="분류"
        placeholder="선택하세요"
        errorMessage={errors?.type?.message as string}
      />
      <S.Divider />
      <Input
        {...register('amount')}
        title="자산가치"
        placeholder="금액을 입력하세요"
        errorMessage={errors?.amount?.message as string}
      />
      <S.Divider />
      <Input
        {...register('memo')}
        title="메모"
        errorMessage={errors?.memo?.message as string}
      />
    </S.Container>
  );
}
