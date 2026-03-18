import { MoviesPage } from '@/ui-pages/movies';

type searchParams = {
  short?: string;
};

type Props = {
  searchParams: Promise<searchParams>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;

  return <MoviesPage isShortOnly={params.short === '1'} />;
}
