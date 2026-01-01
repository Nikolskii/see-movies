'use client';

import clsx from 'clsx';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { useUser } from '@/entities/user';
import { AuthButtons } from '@/features/auth';
import { ProfileLink } from '@/features/profile';
import { isRouteActive } from '@/shared/lib';
import { routes } from '@/shared/routes';
import { Drawer, Logo, ThemeToggle } from '@/shared/ui';
import { MobileMenu } from '@/widgets/header/ui/MobileMenu';

const LINKS = [
  { href: routes.movies, label: 'Фильмы' },
  { href: routes.savedMovies, label: 'Сохранённые фильмы' },
];

export function Header() {
  const pathname = usePathname();

  const { isAuthorized } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex min-h-[74px] items-center justify-between px-[14px] md:px-[30px] lg:px-[50px]">
        <Logo />
        {isAuthorized ? (
          <nav className="hidden lg:inline">
            <ul className="flex gap-4">
              {LINKS.map(({ href, label }) => {
                const isActive = isRouteActive({ href, pathname });

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={clsx(
                        'action-fade text-[13px] font-medium transition-opacity',
                        isActive ? 'font-medium' : 'opacity-70'
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {isAuthorized ? (
            <div className="hidden lg:inline">
              <ProfileLink />
            </div>
          ) : (
            <AuthButtons />
          )}
          {isAuthorized ? (
            <button
              className="action-fade cursor-pointer lg:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={30} />
            </button>
          ) : null}
        </div>
      </header>
      <Drawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <MobileMenu />
      </Drawer>
    </>
  );
}
