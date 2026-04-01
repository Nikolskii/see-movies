'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { type FormEvent, useEffect, useState } from 'react';

import { normalizeQuery } from '@/features/search-movies/lib/normalizeQuery';

export function SearchMoviesForm() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlQuery = searchParams.get('query') ?? '';
  const [searchQuery, setSearchQuery] = useState(urlQuery);

  useEffect(() => {
    setSearchQuery(urlQuery);
  }, [urlQuery]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    const normalizedQuery = normalizeQuery(searchQuery);

    if (normalizedQuery) {
      params.set('query', normalizedQuery);
    } else {
      params.delete('query');
    }

    const nextQueryString = params.toString();

    router.replace(nextQueryString ? `${pathname}?${nextQueryString}` : pathname, {
      scroll: false,
    });
  };

  return (
    <form className="flex items-center gap-[15px]" onSubmit={handleSubmit} role="search">
      <input
        className="bg-light-700 dark:bg-dark-700 dark:text-light-900 h-[44px] w-full rounded-[8px] border border-transparent px-4 text-[14px] leading-[18px] font-normal text-black caret-blue-500 outline-none placeholder:text-gray-500 focus:border-blue-500 sm:h-[50px] sm:px-[22px]"
        type="text"
        placeholder="Фильм"
        aria-label="Название фильма"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <button
        className="action-fade h-[44px] shrink-0 cursor-pointer rounded-[5px] bg-blue-500 px-[18px] text-[12px] leading-[18px] font-medium text-white sm:h-[50px]"
        type="submit"
      >
        Найти
      </button>
    </form>
  );
}
