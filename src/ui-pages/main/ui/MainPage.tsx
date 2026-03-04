import { getAuthToken } from '@/shared/lib/server';
import { Footer } from '@/shared/ui';
import { AboutMe } from '@/ui-pages/main/ui/AboutMe';
import { AboutProject } from '@/ui-pages/main/ui/AboutProject';
import { Portfolio } from '@/ui-pages/main/ui/Portfolio';
import { Promo } from '@/ui-pages/main/ui/Promo';
import { Techs } from '@/ui-pages/main/ui/Techs';
import { Header } from '@/widgets/header';

export async function MainPage() {
  const jwt = await getAuthToken();
  const isAuthorized = Boolean(jwt);

  return (
    <div className="dark:bg-dark-900 bg-color-light-900 min-h-screen text-black dark:text-white">
      <div className="container mx-auto">
        <Header isAuthorized={isAuthorized} />
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}
