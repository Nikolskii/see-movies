'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { InputLabel } from '@/features/auth/signup/ui/InputLabel';
import { Input } from '@/shared/ui';

type FormValues = { name: string; email: string; password: string };

export function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        label={<InputLabel htmlFor="name">Имя</InputLabel>}
        error={errors.name?.message}
        autoComplete="given-name"
        {...register('name', { required: 'Введите имя' })}
      />
      <Input
        label={<InputLabel htmlFor="email">E-mail</InputLabel>}
        type="email"
        error={errors.email?.message}
        autoComplete="email"
        {...register('email', { required: 'Введите email' })}
      />
      <Input
        label={<InputLabel htmlFor="password">Пароль</InputLabel>}
        type="password"
        error={errors.password?.message}
        autoComplete="new-password"
        {...register('password', { required: 'Введите пароль' })}
      />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
