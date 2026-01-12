'use client';

import { useRouter } from 'next/navigation';

import { SigninForm } from '@/features/auth/signin';
import { routes } from '@/shared/routes';

export function SigninFormSection() {
  const router = useRouter();

  const handleSuccess = (token: string) => {
    console.log('token', token);
    router.push(routes.movies);
  };

  return <SigninForm onSuccess={({ token }) => handleSuccess(token)} />;
}
