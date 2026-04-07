import { MoviesGrid } from '@/widgets/movies-grid';

type Props = {
  count?: number;
};

export function MoviesGridSkeleton({ count = 12 }: Props) {
  return (
    <MoviesGrid>
      {Array.from({ length: count }, (_, index) => (
        <article key={index} className="w-[clamp(300px,100%,340px)] animate-pulse">
          <div className="dark:bg-dark-700 h-[168px] w-full rounded-md bg-gray-200 md:h-[190px] xl:h-[200px]" />
          <div className="flex items-center justify-between gap-2 pt-4 md:pt-6 xl:py-3 xl:pt-3">
            <div className="dark:bg-dark-700 h-4 w-2/3 rounded bg-gray-200" />
            <div className="dark:bg-dark-700 h-5 w-10 rounded-[3px] bg-gray-200" />
          </div>
        </article>
      ))}
    </MoviesGrid>
  );
}
