import Image from 'next/image';
import Link from 'next/link';

import { routes } from '@/shared/routes';

export function Logo() {
  return (
    <Link href={routes.home}>
      <Image
        className="action-fade"
        src="/images/logo.svg"
        width={38}
        height={38}
        alt="See movies"
      />
    </Link>
  );
}
