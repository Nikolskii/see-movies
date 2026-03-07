import Image from 'next/image';
import Link from 'next/link';

type Props = {
  name: string;
  trailerLink: string;
  duration: string;
  image: string;
  actionSlot: React.ReactNode;
};

export function MovieCard({ name, trailerLink, duration, image, actionSlot }: Props) {
  return (
    <article className="group relative w-[clamp(300px,100%,340px)]">
      <div className="pointer-events-none absolute top-4 right-4 z-10">{actionSlot}</div>
      <Link
        href={trailerLink}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Открыть трейлер фильма ${name} (откроется в новой вкладке)`}
        className="action-fade relative block h-[168px] w-full overflow-hidden rounded-md md:h-[190px] xl:h-[200px]"
      >
        <Image
          src={image}
          alt={`Постер фильма «${name}»`}
          className="object-cover"
          fill
          sizes="(min-width: 1280px) 360px, (min-width: 768px) 340px, 300px"
        />
      </Link>
      <div className="flex items-center justify-between gap-2 pt-4 md:pt-6 xl:py-3 xl:pt-3">
        <h2 className="truncate text-xs font-medium md:text-[13px] xl:text-sm">{name}</h2>
        <div className="dark:bg-dark-700 bg-light-700 rounded-[3px] px-1 py-[3px] text-[11px] leading-2.5 font-normal whitespace-nowrap text-gray-500">
          {duration}
        </div>
      </div>
    </article>
  );
}
