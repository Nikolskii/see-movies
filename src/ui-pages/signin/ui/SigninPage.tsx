import Link from 'next/link';

import { routes } from '@/shared/routes';
import { Logo, ThemeToggle } from '@/shared/ui';
import { SigninFormSection } from '@/ui-pages/signin/ui/SigninFormSection';

// TODO: вынести стили в общий app layout

export function SigninPage() {
  return (
    <div className="dark:bg-dark-900 bg-color-light-900 min-h-screen text-black dark:text-white">
      <div className="container mx-auto flex min-h-screen flex-col md:max-w-[400px]">
        <header className="flex flex-col items-center justify-center">
          <div className="mb-5 flex w-full justify-end p-3">
            <ThemeToggle />
          </div>
          <div className="mb-[50px]">
            <Logo />
          </div>
          <h1 className="mb-20 text-[24px] font-medium">Рады видеть!</h1>
        </header>
        <main className="flex flex-1 flex-col px-[30px] pb-3.5">
          <SigninFormSection />
        </main>
        <footer className="pb-[30px]">
          <p className="text-center text-[12px] text-gray-500 md:text-[14px]">
            Ещё не зарегистрированы?{' '}
            <Link className="action-fade text-blue-500" href={routes.signup}>
              Регистрация
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
