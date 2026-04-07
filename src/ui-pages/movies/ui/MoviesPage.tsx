import { Suspense } from 'react';

import { Footer } from '@/shared/ui';
import { MoviesContent } from '@/ui-pages/movies/ui/MoviesContent';
import { Header } from '@/widgets/header';
import { MoviesGridSkeleton } from '@/widgets/movies-grid';
import { MoviesSearch } from '@/widgets/movies-search';

type Props = {
  isShortOnly: boolean;
  searchQuery: string;
};

export function MoviesPage({ isShortOnly, searchQuery }: Props) {
  return (
    <div className="page-root">
      <div className="container mx-auto flex min-h-screen flex-col">
        <Header isAuthorized />
        <MoviesSearch />
        <div className="flex-1">
          <Suspense fallback={<MoviesGridSkeleton />}>
            <MoviesContent isShortOnly={isShortOnly} searchQuery={searchQuery} />
          </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
}
