import { useQuery } from '@tanstack/react-query';

import { getUser, User } from '@/entities/user/api/getUser';
import type { ApiError } from '@/shared/api';

type Result = {
  user: User | null;
  isLoading: boolean;
  error: ApiError | null;
};

export function useUserQuery(): Result {
  const query = useQuery<User, ApiError>({
    queryKey: ['user', 'me'],
    queryFn: getUser,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 0,
  });

  return {
    user: query.data ?? null,
    isLoading: query.isLoading,
    error: query.error ?? null,
  };
}
