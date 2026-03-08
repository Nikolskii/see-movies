'use client';

import { useRouter } from 'next/navigation';

import { LogoutButton } from '@/features/auth';
import { routes } from '@/shared/routes';

export function LogoutButtonController() {
  const router = useRouter();

  return <LogoutButton onLogout={() => router.push(routes.home)} />;
}
