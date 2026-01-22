'use client';

import { useRouter } from 'next/navigation';

import { useLogoutMutation } from '@/features/auth';
import { routes } from '@/shared/routes';
import { Button } from '@/shared/ui';

export function LogoutButton() {
  const router = useRouter();

  const logout = useLogoutMutation({
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
