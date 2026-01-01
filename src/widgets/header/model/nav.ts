import { routes } from '@/shared/routes';

export const navLinks = [
  { href: routes.movies, label: 'Фильмы' },
  { href: routes.savedMovies, label: 'Сохранённые фильмы' },
] as const;
