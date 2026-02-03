import { EditProfileSection } from '@/ui-pages/profile/ui/EditProfileSection';
import { HeaderSection } from '@/ui-pages/profile/ui/HeaderSection';
import { LogoutButton } from '@/ui-pages/profile/ui/LogoutButton';
import { Title } from '@/ui-pages/profile/ui/Title';

// TODO: найти попапы
// TODO: Проверить кеширование на сервере cashe control всех запросов

export async function ProfilePage() {
  return (
    <div className="dark:bg-dark-900 bg-color-light-900 min-h-screen text-black dark:text-white">
      <div className="center container mx-auto flex min-h-screen flex-col">
        <HeaderSection />
        <main className="mx-auto flex flex-1 flex-col px-[30px] pt-[70px] pb-3.5 md:max-w-[400px]">
          <Title />
          <EditProfileSection />
        </main>
        <footer className="flex justify-center pb-[30px]">
          <LogoutButton />
        </footer>
      </div>
    </div>
  );
}
