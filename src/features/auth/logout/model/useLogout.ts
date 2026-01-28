'use client';

import { useMutation } from '@tanstack/react-query';

import { logout } from '@/features/auth/logout/api/logout';

type Props = {
  onSuccess?: () => void;
};

// TODO: сбрасывать пользователя?

export function useLogout({ onSuccess }: Props) {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      onSuccess?.();
    },
  });
}
