export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const NOMOREPARTIES_API_URL = process.env.NEXT_NOMOREPARTIES_URL;

if (!API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined');
}

if (!NOMOREPARTIES_API_URL) {
  throw new Error('NEXT_NOMOREPARTIES_URL is not defined');
}
