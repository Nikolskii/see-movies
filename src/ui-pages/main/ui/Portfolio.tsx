const LINKS = [
  {
    title: 'Статичный сайт',
    href: 'https://github.com/Nikolskii/how-to-learn',
  },
  {
    title: 'Адаптивный сайт',
    href: 'https://github.com/Nikolskii/russian-travel',
  },
  {
    title: 'Одностраничное приложение',
    href: 'https://github.com/Nikolskii/react-mesto-api-full',
  },
];

export function Portfolio() {
  return (
    <section className="px-3.5 py-[70px] md:px-[50px] md:py-[100px] lg:px-[70px]">
      <h3 className="text-text-muted mb-3 text-[14px] md:text-[18px]">Портфолио</h3>
      <ul>
        {LINKS.map(({ title, href }) => (
          <li className="not-last:border-light-700 not-last:border-b" key={href}>
            <a
              className="action-fade block bg-[url('/arrow.svg')] bg-size-[12px_12px] bg-right bg-no-repeat py-5 pr-2.5 text-[18px] md:bg-size-[16px_16px] md:py-6 md:text-[28px] lg:text-[30px]"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
