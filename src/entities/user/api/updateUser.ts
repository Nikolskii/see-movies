import { User } from '@/entities/user/model/types';
import { apiFetch } from '@/shared/api';

type UpdatedUser = {
  name?: string;
  email?: string;
};

export async function updateUser(body: UpdatedUser) {
  return apiFetch<User>('/users/me', {
    method: 'PATCH',
    json: body,
  });
}
