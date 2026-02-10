'use client';

import { useRouter } from 'next/navigation';

import { SignupForm } from '@/features/auth';
import { routes } from '@/shared/routes';

// TODO: добавить модалку? переименовать в Controller

export function SignupFormSection() {
  const router = useRouter();

  return <SignupForm onSuccess={() => router.push(routes.signin)} />;
}
