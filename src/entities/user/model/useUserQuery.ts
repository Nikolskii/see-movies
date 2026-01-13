import { useQuery } from '@tanstack/react-query';

import { getUser, User } from '@/entities/user/api/getUser';
import type { ApiError } from '@/shared/api';

type Result = {
  user: User | null;
  isLoading: boolean;
  error: ApiError | null;
};

export function useUserQuery(token: string | null): Result {
  const tokenValue = token ?? '';
  const enabled = tokenValue.length > 0;

  const query = useQuery<User, ApiError>({
    queryKey: ['user', 'me'],
    queryFn: () => getUser(tokenValue),
    enabled,
    staleTime: 5 * 60 * 1000, // 5 минут считаем свежим
    gcTime: 30 * 60 * 1000, // 30 минут держим в кэше после размонтирования
    refetchOnWindowFocus: false,
    retry: 0,
  });

  return {
    user: query.data ?? null,
    isLoading: query.isLoading,
    error: query.error ?? null,
  };
}
