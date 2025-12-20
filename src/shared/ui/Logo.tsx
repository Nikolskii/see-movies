import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
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
