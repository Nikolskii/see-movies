'use client';

import { useRouter } from 'next/navigation';

import { session } from '@/entities/session';
import { SigninForm } from '@/features/auth/signin';
import { routes } from '@/shared/routes';

export function SigninFormSection() {
  const router = useRouter();

  const handleSuccess = (token: string) => {
    session.setToken(token);
    router.replace(routes.movies);
  };

  return <SigninForm onSuccess={({ token }) => handleSuccess(token)} />;
}
