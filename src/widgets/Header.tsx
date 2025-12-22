import { useUser } from '@/entities/user';
import { ProfileLink } from '@/features/profile';
import { Logo } from '@/shared/ui';

export function Header() {
  const { isAuthorized } = useUser();

  console.log('isAuthorized', isAuthorized);

  return (
    <header className="flex justify-between">
      <Logo />
      {/* <div>{navigation}</div> */}
      {isAuthorized ? <ProfileLink /> : <button>Войти</button>}
    </header>
  );
}
