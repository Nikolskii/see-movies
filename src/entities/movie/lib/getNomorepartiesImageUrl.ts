import { NOMOREPARTIES_API_URL } from '@/shared/config/env';

export function getNomorepartiesImageUrl(path: string): string {
  return `${NOMOREPARTIES_API_URL}${path}`;
}
