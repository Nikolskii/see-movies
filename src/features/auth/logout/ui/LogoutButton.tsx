'use client';

import { useMutation } from '@tanstack/react-query';

import { logout } from '@/features/auth/logout/api/logout';
import { Button } from '@/shared/ui';

type Props = {
  onLogout?: () => void;
};

export function LogoutButton({ onLogout }: Props) {
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      onLogout?.();
    },
  });

  return (
    <Button variant="ghost" className="text-pink-500" onClick={() => logoutMutation.mutate()}>
      Выйти из аккаунта
    </Button>
  );
}
