import { getMe } from '@/entities/user/api/server/getMe';
import { tryApi } from '@/shared/api/http/tryApi';
import { LogoutButton } from '@/ui-pages/profile/ui/LogoutButton';
import { Header } from '@/widgets/header/';

export async function ProfilePage() {
  const me = await tryApi(getMe);

  return (
    <div className="dark:bg-dark-900 bg-color-light-900 min-h-screen text-black dark:text-white">
      <div className="center container mx-auto flex min-h-screen flex-col">
        <Header isAuthorized={me.ok} />
        <main className="flex flex-1 flex-col px-[30px] pb-3.5"></main>
        <footer className="pb-[30px]">
          <LogoutButton />
        </footer>
      </div>
    </div>
  );
}
