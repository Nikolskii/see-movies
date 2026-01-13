import { apiFetch } from '@/shared/api';

export type User = {
  _id: string;
  name: string;
  email: string;
};

export function getUser(token: string) {
  return apiFetch<User>('/users/me', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
}
