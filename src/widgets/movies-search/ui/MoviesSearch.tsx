import { ShortMoviesToggle } from '@/features/filter-short-movies';
import { SearchMoviesForm } from '@/features/search-movies';

export function MoviesSearch() {
  return (
    <div className="mb-[40px] px-[14px] pt-[80px] md:px-[30px] lg:px-[70px]">
      <div className="flex flex-col gap-[45px] border-b border-light-700 pb-[40px] sm:gap-[30px] dark:border-dark-700">
        <SearchMoviesForm />
        <ShortMoviesToggle />
      </div>
    </div>
  );
}

