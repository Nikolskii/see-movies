import { isClient } from '@/shared/lib';

const TOKEN_KEY = 'auth_token';

export const session = {
  getToken() {
    if (!isClient) return null;
    return localStorage.getItem(TOKEN_KEY);
  },
  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  },
  clearToken() {
    localStorage.removeItem(TOKEN_KEY);
  },
};
