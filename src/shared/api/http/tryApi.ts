import { ApiError } from '@/shared/api/http/model';

export type ApiResult<T> = { ok: true; data: T } | { ok: false; error: ApiError };

export async function tryApi<T>(fn: () => Promise<T>): Promise<ApiResult<T>> {
  try {
    return { ok: true, data: await fn() };
  } catch (e) {
    return { ok: false, error: e as ApiError };
  }
}
