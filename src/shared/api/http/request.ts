import { ApiError } from '@/shared/api/http/error';

type ApiResult<T> = { ok: true; data: T } | { ok: false; error: ApiError };

export async function request<T>(fn: () => Promise<T>): Promise<ApiResult<T>> {
  try {
    const data = await fn();
    return { ok: true, data };
  } catch (e) {
    return { ok: false, error: e as ApiError };
  }
}
