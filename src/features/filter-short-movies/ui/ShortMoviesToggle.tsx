'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function ShortMoviesToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const checked = searchParams.get('short') === '1';

  const onChange = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (checked) {
      params.delete('short');
    } else {
      params.set('short', '1');
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center gap-3">
      <label
        className={`relative inline-flex h-[14px] w-[34px] cursor-pointer items-center rounded-full transition-colors hover:opacity-70 ${
          checked ? 'bg-green-500' : 'bg-light-700 dark:bg-dark-700'
        }`}
      >
        <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
        <span
          className={`absolute h-[10px] w-[10px] rounded-full bg-white transition-transform duration-300 ${
            checked ? 'translate-x-[22px]' : 'translate-x-[2px]'
          }`}
        />
      </label>
      <p className="text-dark-900 dark:text-light-900 text-xs font-normal">Короткометражки</p>
    </div>
  );
}
