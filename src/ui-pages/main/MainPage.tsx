import { ThemeToggle } from '@/shared/ui/theme-toggle';
import { AboutMe } from '@/ui-pages/main/ui/about-me';
import { AboutProject } from '@/ui-pages/main/ui/about-project';
import { Portfolio } from '@/ui-pages/main/ui/portfolio';
import { Promo } from '@/ui-pages/main/ui/promo';
import { Techs } from '@/ui-pages/main/ui/techs';

export function MainPage() {
  return (
    <div className="dark:bg-dark-900 bg-color-light-900 min-h-screen text-black dark:text-white">
      <div className="container mx-auto">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <ThemeToggle />
      </div>
    </div>
  );
}
