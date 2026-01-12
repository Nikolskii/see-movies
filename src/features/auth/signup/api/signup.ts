import { apiFetch } from '@/shared/api';

export type SignupRequest = {
  name: string;
  email: string;
  password: string;
};

export type SignupResponse = {
  name: string;
  email: string;
};

export function signup(body: SignupRequest) {
  return apiFetch<SignupResponse>('/signup', {
    method: 'POST',
    json: body,
  });
}
