'use client';

import clsx from 'clsx';
import { Loader2 } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  fullWidth?: boolean;
  loading?: boolean;
};

// TODO: актуализровать стили по вариантам

export function Button({
  variant = 'primary',
  fullWidth,
  loading,
  className,
  disabled,
  type = 'button',
  children,
  ...props
}: Props) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-disabled={isDisabled || undefined}
      {...props}
      className={clsx(
        'action-fade inline-flex cursor-pointer items-center justify-center rounded-[3px] p-[15px] text-[12px] transition-opacity md:p-[13px] md:text-[14px]',
        'disabled:pointer-events-none disabled:opacity-60',
        fullWidth && 'w-full',

        // sizes
        // size === 'sm' && 'px-3 py-2 text-[12px]',
        // size === 'md' && 'px-5 py-3 text-[14px]',
        // size === 'lg' && 'px-6 py-4 text-[16px]',

        // variants
        variant === 'primary' && 'bg-blue-500 text-white',
        // variant === 'secondary' && 'bg-neutral-700 text-white',
        // variant === 'ghost' && 'bg-transparent text-white hover:opacity-80',
        // variant === 'danger' && 'bg-pink-600 text-white',

        className
      )}
    >
      {loading ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> : children}
    </button>
  );
}
