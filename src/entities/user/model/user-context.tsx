'use client';

import { createContext, useState } from 'react';

import { User } from '@/entities/user/model/types';

type Props = {
  initialUser: User;
  children: React.ReactNode;
};

type ContextValue = {
  user: User;
  setUser: (user: User) => void;
};

export const UserContext = createContext<ContextValue | null>(null);

export function UserProvider({ initialUser, children }: Props) {
  const [user, setUser] = useState<User>(initialUser);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
