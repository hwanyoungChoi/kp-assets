import { useFormContext } from 'react-hook-form';
import * as S from './form.styled';

export default function Form() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <S.Container>
      <input {...register('name')} />
      <br />
      <input {...register('type')} />
      <br />
      <input {...register('amount')} />
      <br />
      <input {...register('memo')} />
    </S.Container>
  );
}
