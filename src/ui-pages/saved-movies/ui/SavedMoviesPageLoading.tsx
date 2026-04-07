import { Footer } from '@/shared/ui';
import { Header } from '@/widgets/header';
import { MoviesGridSkeleton } from '@/widgets/movies-grid';
import { MoviesSearch } from '@/widgets/movies-search';

export function SavedMoviesPageLoading() {
  return (
    <div className="page-root">
      <div className="container mx-auto flex min-h-screen flex-col">
        <Header isAuthorized />
        <MoviesSearch />
        <div className="flex-1">
          <MoviesGridSkeleton />
        </div>
        <Footer />
      </div>
    </div>
  );
}

