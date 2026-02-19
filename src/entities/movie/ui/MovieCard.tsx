import Image from 'next/image';

type Props = {
  name: string;
  trailerLink: string;
  duration: string;
  handleCardClick: () => void;
  image: {
    alternativeText: string;
    link: string;
  };
};

export function MovieCard({ name, trailerLink, duration, handleCardClick, image }: Props) {
  return (
    <article className="relative max-w-[360px]">
      <div className="absolute top-4 right-4">Лайк</div>
      <div className="relative h-[168px] w-[300px] overflow-hidden rounded-md md:h-[190px] md:w-[340px] xl:h-[200px] xl:w-[360px]">
        <Image
          alt={image.alternativeText}
          src={image.link}
          className="object-cover"
          fill
          sizes="(min-width: 1280px) 360px, (min-width: 768px) 340px, 300px"
        />
      </div>
      <div className="flex items-center justify-between gap-2 pt-4 md:pt-6 xl:py-3 xl:pt-3">
        <h2 className="text-xs font-medium md:text-[13px] xl:text-sm">{name}</h2>
        <div className="dark:bg-dark-700 bg-light-700 rounded-[3px] px-1 py-[3px] text-[11px] leading-[10px] font-normal text-gray-500">
          {duration}
        </div>
      </div>
    </article>
  );
}
