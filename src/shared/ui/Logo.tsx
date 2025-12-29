import Image from 'next/image';
import Link from 'next/link';

import { routes } from '@/shared/routes';

// TODO: разобраться с предупреждением в console
// TODO: изучить Image https://nextjs.org/docs/app/api-reference/components/image
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
