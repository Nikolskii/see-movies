import Link from 'next/link';

export function ProfileLink() {
  return (
    <Link
      href="/profile"
      className="dark:bg-dark-500 bg-light-500 action-fade rounded-[20px] px-5 py-2 dark:text-white"
    >
      Аккаунт
    </Link>
  );
}
