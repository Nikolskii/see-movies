'use client';

import { useUser } from '@/entities/user';
import { Header } from '@/widgets/header';

export function HeaderSection() {
  const { isAuthorized } = useUser();

  return <Header isAuthorized={isAuthorized} />;
}
