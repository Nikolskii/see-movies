import Link from 'next/link';

import { routes } from '@/shared/routes';

// TODO: вынести из features?

export function AuthButtons() {
  return (
    <div className="flex items-center gap-3.5 md:gap-[30px]">
      <Link className="action-fade text-[10px] font-medium md:text-[12px]" href={routes.signup}>
        Регистрация
      </Link>
      <Link
        className="action-fade rounded-[3px] bg-green-500 px-3 py-[5px] text-[10px] text-black md:px-5 md:py-2 md:text-[12px]"
        href={routes.signin}
      >
        Войти
      </Link>
    </div>
  );
}
