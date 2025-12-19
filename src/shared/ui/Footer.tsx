const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="flex flex-col items-center px-2.5 pt-20 pb-5 md:px-[30px] lg:px-[70px]">
      <h2 className="mb-[30px] w-full border-b border-[#8B8B8B] pb-5 text-center text-[11px] text-[#8B8B8B] md:mb-5 md:text-[13px] dark:border-[#424242]">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="flex flex-col gap-[30px] md:w-full md:flex-row-reverse md:items-end md:justify-between">
        <ul className="align-center flex flex-col justify-center gap-2 md:flex-row md:gap-[20px]">
          <li className="text-center">
            <a
              className="action-fade text-[12px] md:text-[13px]"
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="text-center">
            <a
              className="action-fade text-[12px] md:text-[13px]"
              href="https://github.com/Nikolskii"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
        <p className="text-center text-[12px] md:text-[13px]">&copy; {CURRENT_YEAR}</p>
      </div>
    </footer>
  );
}
