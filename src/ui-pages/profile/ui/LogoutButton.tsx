'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { logout } from '@/features/auth';
import { routes } from '@/shared/routes';
import { Button } from '@/shared/ui';

export function LogoutButton() {
  const router = useRouter();

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      router.push(routes.home);
    },
  });

  function handleClick() {
    logoutMutation.mutate();
  }

  return (
    <Button variant="ghost" className="text-pink-500" onClick={handleClick}>
      Выйти из аккаунта
    </Button>
  );
}
