'use client';

import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { SavedMovie } from '@/entities/movie';
import { deleteMovie, DeleteMovieRequest } from '@/features/delete-movie';
import { ApiError } from '@/shared/api';

// TODO: показать ошибку удаления

type Props = {
  movieId: string;
  movieName: string;
};

export function DeleteMovieButton({ movieName, movieId }: Props) {
  const router = useRouter();

  const mutation = useMutation<SavedMovie, ApiError, DeleteMovieRequest>({
    mutationFn: deleteMovie,
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
        mutation.isPending ? `Удаление фильма ${movieName}` : `Удалить фильм ${movieName}`
      }
      onClick={() => mutation.mutate({ movieId })}
      disabled={mutation.isPending}
      className="action-fade bg-light-500 dark:bg-dark-500 duration-base pointer-events-auto flex h-[21px] w-[21px] cursor-pointer items-center justify-center rounded-[30px] disabled:cursor-auto xl:opacity-0 xl:transition-opacity xl:group-hover:opacity-100"
    >
      {mutation.isPending ? (
        <span
          aria-hidden="true"
          className="block h-3 w-3 animate-spin rounded-full border border-current border-t-transparent"
        />
      ) : (
        <Image alt="" aria-hidden src="/icons/x.svg" width={8} height={8} />
      )}
    </button>
  );
}
