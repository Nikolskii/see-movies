'use client';

import { useRouter } from 'next/navigation';

import { SignupForm } from '@/features/auth';
import { routes } from '@/shared/routes';

export function SignupFormSection() {
  const router = useRouter();

  return <SignupForm onSuccess={() => router.push(routes.signin)} />;
}
