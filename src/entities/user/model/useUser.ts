import { useContext } from 'react';

import { UserContext } from '@/entities/user/model/user-context';

export function useUser() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('useUser must be used within UserProvider');
  }

  const { user, setUser } = userContext;

  return {
    user,
    isAuthorized: Boolean(user),
    setUser,
  };
}
