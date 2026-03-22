import { ReactElement } from 'react';

type Props = {
  children: ReactElement[];
};

export function MoviesGrid({ children }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-10 px-2.5 pt-[40px] md:gap-x-[30px] md:gap-y-[45px] md:pt-[70px] xl:gap-y-[60px]">
      {children}
    </div>
  );
}
