'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ProfileLink } from '@/features/profile';
import { isRouteActive } from '@/shared/lib';
import { routes } from '@/shared/routes';

const LINKS = [
  { href: routes.home, label: 'Главная' },
  { href: routes.movies, label: 'Фильмы' },
  { href: routes.savedMovies, label: 'Сохранённые фильмы' },
];

// TODO актуализировать стили активного пункта меню

export function MobileMenu() {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col justify-between gap-10 px-2.5 pt-36 pb-[46px] md:pt-40 md:pb-[100px]">
      <nav>
        <ul className="flex flex-col gap-4 text-center">
          {LINKS.map(({ href, label }) => {
            const isActive = isRouteActive({ href, pathname });

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={clsx(
                    'text-[18px] font-medium transition-opacity',
                    isActive ? 'border-b-2 border-white' : 'opacity-70'
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex justify-center">
        <ProfileLink />
      </div>
    </div>
  );
}
