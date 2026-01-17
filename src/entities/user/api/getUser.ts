import { apiFetch } from '@/shared/api';

export type User = {
  _id: string;
  name: string;
  email: string;
};

export function getUser() {
  return apiFetch<User>('/users/me', {
    method: 'GET',
  });
}
