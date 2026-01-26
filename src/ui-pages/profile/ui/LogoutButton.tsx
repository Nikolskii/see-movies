'use client';

import { useRouter } from 'next/navigation';

import { useLogout } from '@/features/auth/logout/model/useLogout';
import { routes } from '@/shared/routes';
import { Button } from '@/shared/ui';

export function LogoutButton() {
  const router = useRouter();

  const logout = useLogout({
    onSuccess: () => {
      router.push(routes.home);
    },
  });

  function handleClick() {
    logout.mutate();
  }

  return (
    <Button variant="ghost" className="text-pink-500" onClick={handleClick}>
      Выйти из аккаунта
    </Button>
  );
}
