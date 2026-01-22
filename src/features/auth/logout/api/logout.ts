import { apiFetch } from '@/shared/api';

export type LogoutResponse = {
  ok: true;
};

export function logout() {
  return apiFetch<LogoutResponse>('/users/logout', {
    method: 'POST',
  });
}
