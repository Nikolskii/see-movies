export type ApiError = {
  message: string;
  status: number;
  details?: unknown;
};

export type ErrorPayload = {
  message?: unknown;
};
