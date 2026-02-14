import { ApiError, ErrorPayload } from '@/shared/api/http/model';

const DEFAULT_API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!DEFAULT_API_BASE_URL) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined');
}

type ApiFetchInit = RequestInit & {
  json?: unknown;
};

export async function apiFetch<T>(
  path: string,
  init?: ApiFetchInit,
  baseUrl: string = DEFAULT_API_BASE_URL as string
): Promise<T> {
  const res = await fetch(`${baseUrl}${path}`, {
    credentials: 'include',
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
    body: init?.json !== undefined ? JSON.stringify(init.json) : init?.body,
  });

  const contentType = res.headers.get('content-type') ?? '';
  const isJson = contentType.includes('application/json');

  const payload: unknown = isJson
    ? await res.json().catch(() => null)
    : await res.text().catch(() => null);

  if (!res.ok) {
    const message =
      isErrorPayload(payload) && typeof payload.message === 'string'
        ? payload.message
        : 'Ошибка запроса';

    throw {
      message,
      status: res.status,
      details: payload,
    } satisfies ApiError;
  }

  return payload as T;
}

function isErrorPayload(value: unknown): value is ErrorPayload {
  return typeof value === 'object' && value !== null && 'message' in value;
}
