import { SavedMoviesPage } from '@/ui-pages/saved-movies';

type searchParams = {
  short?: string;
};

type Props = {
  searchParams: Promise<searchParams>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;

  return <SavedMoviesPage isShortOnly={params.short === '1'} />;
}
