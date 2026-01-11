export type ApiError = {
  message: string;
  status: number;
  details?: unknown;
};

type ErrorPayload = {
  message?: unknown;
};

export function isErrorPayload(value: unknown): value is ErrorPayload {
  return typeof value === 'object' && value !== null;
}
