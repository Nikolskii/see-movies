import Link from 'next/link';

import { SignupForm } from '@/features/auth';
import { routes } from '@/shared/routes';
import { Logo, ThemeToggle } from '@/shared/ui';

// TODO: вынести стили в общий app layout

export function SignupPage() {
  return (
    <div className="dark:bg-dark-900 bg-color-light-900 min-h-screen text-black dark:text-white">
      <div className="container mx-auto flex min-h-screen flex-col">
        <header className="flex flex-col items-center justify-center">
          <div className="mb-5 flex w-full justify-end p-3">
            <ThemeToggle />
          </div>
          <div className="mb-[50px]">
            <Logo />
          </div>
          <h1 className="mb-20 text-[24px] font-medium">Добро пожаловать!</h1>
        </header>
        <main className="flex flex-1 flex-col px-[30px] pb-3.5">
          <SignupForm />
        </main>
        <footer className="pb-[30px]">
          <p className="text-center text-[12px] text-gray-500 md:text-[14px]">
            Уже зарегистрированы?{' '}
            <Link className="action-fade text-blue-500" href={routes.signin}>
              Войти
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
