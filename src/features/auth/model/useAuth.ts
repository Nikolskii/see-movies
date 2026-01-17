'use client';

import { useUserQuery } from '@/entities/user';

export function useAuth() {
  const { user, isLoading, error } = useUserQuery();

  return {
    user,
    isAuthorized: Boolean(user),
    isLoading,
    error,
  };
}
