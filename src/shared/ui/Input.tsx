'use client';

import clsx from 'clsx';

type Props = Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> & {
  ref?: React.Ref<HTMLInputElement>;
  wrapperClassName?: string;
  inputClassName?: string;
  label?: React.ReactNode;
  error?: React.ReactNode | boolean;
};

export function Input({
  ref,
  label,
  error,
  name,
  id,
  wrapperClassName,
  inputClassName,
  disabled,
  ...props
}: Props) {
  const inputId = id ?? name;
  const hasError = Boolean(error);
  const errorId = hasError ? `${name}-error` : undefined;

  return (
    <div className={clsx('flex flex-col gap-2.5', wrapperClassName)}>
      {label ? label : null}

      <input
        ref={ref}
        id={inputId}
        name={name}
        disabled={disabled}
        aria-invalid={hasError || undefined}
        aria-describedby={errorId}
        className={clsx(
          'bg-light-700 dark:bg-dark-700 w-full rounded-lg border p-[15px] text-[13px]',
          disabled ? 'opacity-60' : '',
          hasError ? 'border-pink-500 text-pink-500' : 'dark:text border-transparent',
          inputClassName
        )}
        {...props}
      />

      {hasError && typeof error !== 'boolean' ? (
        <div className="text-[10px] text-pink-500" id={errorId} role="alert">
          {error}
        </div>
      ) : null}
    </div>
  );
}
