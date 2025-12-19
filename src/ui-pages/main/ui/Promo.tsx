const links = [
  { name: 'О проекте', href: '#about' },
  { name: 'Технологии', href: '#technologies' },
  { name: 'Студент', href: '#student' },
];

export function Promo() {
  return (
    <section className="p-3">
      <div className="dark:bg-dark-800 bg-light-800 rounded-10 flex flex-col items-center gap-53 px-2 pt-55 pb-4 md:gap-78 md:pt-88 md:pb-7 xl:gap-38 xl:pt-40">
        <h1 className="max-w-md text-center text-3xl md:max-w-xl md:text-4xl xl:max-w-3xl xl:text-5xl">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <nav>
          <ul className="flex gap-2 md:gap-2.5">
            {links.map(({ href, name }) => (
              <li
                key={name}
                className="action-fade dark:bg-dark-600 bg-light-600 md:rounded-10 flex min-h-[26px] w-[82px] items-center justify-center rounded-md text-xs font-medium md:min-h-[36px] md:w-[96px]"
              >
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
