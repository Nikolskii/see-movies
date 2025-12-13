const TECHNOLOGIES = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

export function Techs() {
  return (
    <section className="px-[18px] py-[70px] md:px-[50px] md:py-[90px] xl:px-[70px] xl:py-[100px]">
      <h2 className="text-lg md:text-[22px]">Технологии</h2>
      <div className="mt-[28px] mb-[60px] border-b border-neutral-300 md:mt-[23px] md:mb-[80px] xl:mb-[90px]" />
      <h3 className="mb-[24px] text-center text-[30px] md:mb-[22px] md:text-[50px] xl:mb-[26px]">
        7 технологий
      </h3>
      <p className="mb-[50px] px-[5px] text-center text-[11px] md:mb-[83px] md:text-[12px] xl:mb-[100px] xl:text-[14px]">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <div className="mx-auto flex max-w-[180px] flex-wrap gap-[10px] md:max-w-none md:justify-center">
        {TECHNOLOGIES.map((item) => (
          <div
            className="dark:bg-dark-600 rounded-10 bg-light-600 flex h-[57px] w-[84px] items-center justify-center text-[12px] lg:h-[60px] lg:w-[90px] lg:text-[14px]"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
