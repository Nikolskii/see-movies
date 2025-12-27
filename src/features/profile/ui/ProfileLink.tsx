import Link from 'next/link';

export function ProfileLink() {
  return (
    <Link
      href="/profile"
      className="dark:bg-dark-500 bg-light-500 action-fade rounded-[20px] px-5 py-2 text-[14px] font-medium dark:text-white"
    >
      Аккаунт
    </Link>
  );
}
