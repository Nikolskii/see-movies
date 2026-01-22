'use client';

import { useRouter } from 'next/navigation';

import { SigninForm } from '@/features/auth/';
import { routes } from '@/shared/routes';

export function SigninFormSection() {
  const router = useRouter();

  const handleSuccess = () => {
    router.replace(routes.movies);
  };

  return <SigninForm onSuccess={handleSuccess} />;
}
