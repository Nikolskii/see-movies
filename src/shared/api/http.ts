//  TODO: какое еще название можно использовать? этот же файл будет использоваться для get запросов?

export type ApiError = {
  message: string;
  status: number;
  details?: unknown;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch<T>(
  path: string,
  init?: RequestInit & { json?: unknown }
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
    body: init?.json !== undefined ? JSON.stringify(init.json) : init?.body,
  });

  // попытаться достать тело ответа (и для ok, и для errors)
  const contentType = res.headers.get('content-type') ?? '';
  const isJson = contentType.includes('application/json');
  const payload = isJson ? await res.json().catch(() => null) : await res.text().catch(() => null);

  if (!res.ok) {
    // нормализуем ошибку
    const message =
      payload &&
      typeof payload === 'object' &&
      'message' in payload &&
      typeof (payload as any).message === 'string'
        ? (payload as any).message
        : 'Ошибка запроса';

    const err: ApiError = { message, status: res.status, details: payload };
    throw err;
  }

  return payload as T;
}
