'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { InputLabel } from '@/features/auth/signup/ui/InputLabel';
import { Button, Input } from '@/shared/ui';

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex h-full flex-1 flex-col gap-4"
    >
      <div className="flex flex-col gap-4">
        <Input
          label={<InputLabel htmlFor="name">Имя</InputLabel>}
          error={errors.name?.message}
          autoComplete="given-name"
          {...register('name', {
            required: 'Введите имя',
            minLength: {
              value: 2,
              message: 'Имя должно содержать минимум 2 символа',
            },
            maxLength: {
              value: 30,
              message: 'Имя не должно превышать 30 символов',
            },
            pattern: {
              value: /^[A-Za-zА-Яа-яЁё\s-]+$/,
              message: 'Имя может содержать только буквы, пробел и дефис',
            },
          })}
        />

        <Input
          label={<InputLabel htmlFor="email">E-mail</InputLabel>}
          type="email"
          error={errors.email?.message}
          autoComplete="email"
          {...register('email', {
            required: 'Введите email',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Введите корректный email',
            },
          })}
        />
        <Input
          label={<InputLabel htmlFor="password">Пароль</InputLabel>}
          type="password"
          error={errors.password?.message}
          autoComplete="new-password"
          {...register('password', {
            required: 'Введите пароль',
            minLength: {
              value: 6,
              message: 'Пароль должен содержать минимум 6 символов',
            },
          })}
        />
      </div>
      <div className="mt-auto pt-6 md:mt-0">
        <Button type="submit" variant="primary" fullWidth>
          Зарегистрироваться
        </Button>
      </div>
    </form>
  );
}
