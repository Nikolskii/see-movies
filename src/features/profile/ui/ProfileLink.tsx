import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { routes } from '@/shared/routes';

export function ProfileLink() {
  const pathname = usePathname();
  const isActive = pathname === routes.profile;

  console.log('isActive', isActive);

  if (isActive) {
    return (
      <span
        aria-current="page"
        className={clsx(
          'rounded-[20px] px-5 py-2 text-[14px] font-medium',
          'cursor-default opacity-60',
          'dark:bg-dark-500 bg-light-500 dark:text-white'
        )}
      >
        Аккаунт
      </span>
    );
  }

  return (
    <Link
      href={routes.profile}
      className="dark:bg-dark-500 bg-light-500 action-fade rounded-[20px] px-5 py-2 text-[14px] font-medium dark:text-white"
    >
      Аккаунт
    </Link>
  );
}
