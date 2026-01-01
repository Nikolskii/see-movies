import clsx from 'clsx';
import Link from 'next/link';

import { isRouteActive } from '@/shared/lib';
import { navLinks } from '@/widgets/header/model/nav';

type Props = {
  pathname: string;
};

export function DesktopNav({ pathname }: Props) {
  return (
    <nav className="hidden lg:inline">
      <ul className="flex gap-4">
        {navLinks.map(({ href, label }) => {
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
  );
}
