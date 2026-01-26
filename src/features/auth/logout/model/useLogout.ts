'use client';

import { useMutation } from '@tanstack/react-query';

import { logout } from '@/features/auth/logout/api/logout';
import { request } from '@/shared/api/http/request';

type Props = {
  onSuccess?: () => void;
};

// TODO: сбрасывать пользователя?

export function useLogout({ onSuccess }: Props) {
  return useMutation({
    mutationFn: () => request(() => logout()),
    onSuccess: (result) => {
      if (!result.ok) return;
      onSuccess?.();
    },
    onError: (error) => {
      console.error('Logout failed:', error);
    },
  });
}
