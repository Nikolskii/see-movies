// TODO: вынести повторяющиеся классы
export function AboutProject() {
  return (
    <section
      className="mx-[18px] my-[70px] md:mx-[50px] md:my-[90px] xl:mx-[110px] xl:my-[70px]"
      id="about"
    >
      <h2 className="text-lg md:text-[22px]">О проекте</h2>
      <div className="mt-[28px] mb-[60px] border-b border-neutral-300 md:mt-[23px] md:mb-[70px]" />
      <div className="mb-[60px] flex flex-col gap-[56px] md:flex-row md:gap-[93px] xl:mb-[110px]">
        <div>
          <h3 className="mb-4 text-lg md:mb-[22px] md:text-xl xl:mb-[26px]">
            Дипломный проект включал 5 этапов
          </h3>
          <p>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg md:mb-[22px] md:text-xl xl:mb-[26px]">
            На выполнение диплома ушло 5 недель
          </h3>
          <p>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="basis-2/5">
          <div className="mb-[10px] bg-green-500 p-[10px] text-center text-[11px] text-black md:mb-[14px] md:text-[14px]">
            1 неделя
          </div>
          <p className="text-center text-[11px] md:text-[14px]">Back-end</p>
        </div>

        <div className="basis-3/5">
          <div className="dark:bg-dark-600 mb-[10px] bg-neutral-500 p-[10px] text-center text-[11px] text-white md:mb-[14px] md:text-[14px]">
            4 недели
          </div>
          <p className="text-center text-[11px] md:text-[14px]">Front-end</p>
        </div>
      </div>
    </section>
  );
}
