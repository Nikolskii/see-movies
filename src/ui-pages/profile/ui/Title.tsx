'use client';

import { useUser } from '@/entities/user';

export function Title() {
  const { user } = useUser();

  return (
    <h1 className="mb-20 text-center text-[24px] font-medium">Добро пожаловать, {user.name}!</h1>
  );
}
