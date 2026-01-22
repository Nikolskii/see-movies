'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { logout } from '@/features/auth/logout/api/logout';
import { request } from '@/shared/api/http/request';

type Props = {
  onSuccess?: () => void;
};

// const meQueryKey = ['me'] as const;

// TODO: переименовать?
// TODO: вынести на слой выше invalidateQueries
export function useLogoutMutation({ onSuccess }: Props) {
  // const qc = useQueryClient();

  return useMutation({
    mutationFn: () => request(() => logout()),
    onSuccess: (result) => {
      console.log('result', result);
      if (!result.ok) return;
      onSuccess?.();
      // qc.invalidateQueries({ queryKey: meQueryKey });
    },
    onError: (error) => {
      console.error('Logout failed:', error);
    },
  });
}
