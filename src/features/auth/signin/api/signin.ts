import { apiFetch } from '@/shared/api';

export type SigninRequest = {
  email: string;
  password: string;
};

// TODO: актуализировать ответ
export type SigninResponse = {
  ok: true;
};

export function signin(body: SigninRequest) {
  return apiFetch<SigninResponse>('/signin', {
    method: 'POST',
    json: body,
  });
}
