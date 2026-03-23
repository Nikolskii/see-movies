import { SavedMoviesPage } from '@/ui-pages/saved-movies';

type searchParams = {
  query?: string;
  short?: string;
};

type Props = {
  searchParams: Promise<searchParams>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;

  return <SavedMoviesPage isShortOnly={params.short === '1'} searchQuery={params.query ?? ''} />;
}
