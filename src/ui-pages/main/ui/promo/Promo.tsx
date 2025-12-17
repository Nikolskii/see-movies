import { NavTab } from '@/ui-pages/main/ui/promo/NavTab';

export function Promo() {
  return (
    <section className="p-3">
      <div className="dark:bg-dark-800 bg-light-800 rounded-10 flex flex-col items-center gap-53 px-2 pt-55 pb-4 md:gap-78 md:pt-88 md:pb-7 xl:gap-38 xl:pt-40">
        <h1 className="max-w-md text-center text-3xl md:max-w-xl md:text-4xl xl:max-w-3xl xl:text-5xl">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <NavTab />
      </div>
    </section>
  );
}
