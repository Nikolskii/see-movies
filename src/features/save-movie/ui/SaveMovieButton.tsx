'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { SavedMovie } from '@/entities/movie';
import { saveMovie, SaveMovieRequest } from '@/features/save-movie';
import { ApiError } from '@/shared/api';

// TODO: обработать ошибки

type Props = {
  movie: SaveMovieRequest;
};

export function SaveMovieButton({ movie }: Props) {
  const router = useRouter();

  const mutation = useMutation<SavedMovie, ApiError, SaveMovieRequest>({
    mutationFn: saveMovie,
    onSuccess: () => {
      router.refresh();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <button
      type="button"
      aria-label={
        mutation.isPending ? `Сохранение фильма ${movie.nameRU}` : `Сохранить фильм ${movie.nameRU}`
      }
      onClick={() => mutation.mutate(movie)}
      disabled={mutation.isPending}
      className="action-fade bg-light-500 dark:bg-dark-500 duration-base pointer-events-auto cursor-pointer rounded-[30px] p-2 text-[10px] leading-[9px] disabled:cursor-auto xl:opacity-0 xl:transition-opacity xl:group-hover:opacity-100"
    >
      {mutation.isPending ? 'Сохранение...' : 'Сохранить'}
    </button>
  );
}
