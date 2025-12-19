import Image from 'next/image';

export function AboutMe() {
  return (
    <section
      className="px-3.5 py-[70px] md:px-[50px] md:py-[90px] lg:px-[70px] lg:py-[100px]"
      id="student"
    >
      <h2 className="text-lg md:text-[22px]">Студент</h2>
      <div className="mt-7 mb-[60px] border-b border-neutral-300 md:mt-[23px] md:mb-[66px]" />
      <div className="flex flex-col-reverse gap-10 md:flex-row md:gap-[50px] lg:gap-[270px]">
        <div>
          <h3 className="mb-5 text-[32px] md:mb-4 md:text-[40px] lg:mb-[18px] lg:text-[50px]">
            Денис
          </h3>
          <h4 className="mb-5 text-[11px] font-medium md:text-[12px] lg:mb-[26px] lg:text-[18px]">
            Фронтенд-разработчик, 29 лет
          </h4>
          <p className="mb-10 text-[11px] md:mb-3 md:text-[12px] lg:text-[14px]">
            Я родился и живу в Калининграде, закончил факультет экономики БФУ им. Канта. У меня есть
            жена и кошка. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С
            2015 года работал в компании ОАО &quot;РЖД&quot;. После того, как прошёл курс по
            веб-разработке, начал заниматься поиском новой работы.
          </p>
          <a
            className="action-fade text-[14px] font-medium"
            href="https://github.com/Nikolskii"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <Image
          className="rounded"
          src="/images/avatar.jpg"
          alt="Фотография"
          width={460}
          height={460}
        />
      </div>
    </section>
  );
}
