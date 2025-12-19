import { Footer, ThemeToggle } from '@/shared/ui';
import { AboutMe, AboutProject, Portfolio, Promo, Techs } from '@/ui-pages/main/ui';

export function MainPage() {
  return (
    <div className="dark:bg-dark-900 bg-color-light-900 min-h-screen text-black dark:text-white">
      <div className="container mx-auto">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer />
        <ThemeToggle />
      </div>
    </div>
  );
}
