import Image from 'next/image';

import { MovieCardAction as MovieCardActionType } from '@/entities/movie/model/types';

type Props = {
  action: MovieCardActionType;
  name: string;
};

export function MovieCardAction({ action, name }: Props) {
  return (
    <div className="pointer-events-none absolute top-4 right-4 z-10">
      {action.type === 'save' && (
        <button
          type="button"
          area-label="Сохранить фильм"
          onClick={action.onClick}
          className="action-fade bg-light-500 dark:bg-dark-500 duration-base pointer-events-auto cursor-pointer rounded-[30px] p-2 text-[10px] leading-[9px] xl:opacity-0 xl:transition-opacity xl:group-hover:opacity-100"
        >
          Сохранить
        </button>
      )}
      {action.type === 'delete' && (
        <button
          type="button"
          aria-label="Удалить из сохраненных"
          onClick={action.onClick}
          className="action-fade bg-light-500 dark:bg-dark-500 duration-base pointer-events-auto flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-[30px] xl:opacity-0 xl:transition-opacity xl:group-hover:opacity-100"
        >
          <Image
            alt={`Удалить фильм ${name} из сохраненных`}
            aria-hidden
            src="/icons/x.svg"
            width={8}
            height={8}
          />
        </button>
      )}
      {action.type === 'saved' && (
        <div
          className="duration-base flex h-[21px] w-[21px] items-center justify-center rounded-[30px] bg-pink-500 transition-opacity group-hover:opacity-60"
          role="status"
          aria-label={`Фильм ${name} сохранен`}
        >
          <Image alt="Сохранено" aria-hidden width={9} height={6} src="/icons/check.svg" />
        </div>
      )}
    </div>
  );
}
