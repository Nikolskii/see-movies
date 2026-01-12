'use client';

import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';

import { signin, SigninRequest, SigninResponse } from '@/features/auth/signin/api/signin';
import { InputLabel } from '@/features/auth/signin/ui/InputLabel';
import type { ApiError } from '@/shared/api';
import { Button, Input } from '@/shared/ui';

type FormValues = SigninRequest;

type Props = {
  onSuccess?: (response: SigninResponse) => void;
};

export function SigninForm({ onSuccess }: Props) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>();

  const mutation = useMutation<SigninResponse, ApiError, SigninRequest>({
    mutationFn: signin,
    onSuccess: (response) => onSuccess?.(response),
    onError: (err) => {
      setError('root', { message: err.message });
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex h-full flex-1 flex-col gap-4"
    >
      <div className="flex flex-col gap-4">
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
        {errors.root?.message ? (
          <p className="text-sm text-pink-500" role="alert">
            {errors.root.message}
          </p>
        ) : null}
      </div>
      <div className="mt-auto pt-6 md:mt-0">
        <Button
          type="submit"
          variant="primary"
          loading={mutation.isPending}
          disabled={mutation.isPending}
          fullWidth
        >
          Войти
        </Button>
      </div>
    </form>
  );
}
