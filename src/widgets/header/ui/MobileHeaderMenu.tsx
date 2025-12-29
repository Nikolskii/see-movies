import Link from 'next/link';

import { ProfileLink } from '@/features/profile';
import { routes } from '@/shared/routes';

export function MobileHeaderMenu() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href={routes.home} className="text-[18px] font-medium">
              Главная
            </Link>
          </li>
        </ul>
      </nav>
      <ProfileLink />
    </div>
  );
}
