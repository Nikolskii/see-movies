'use client';

import clsx from 'clsx';

type Props = Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> & {
  ref?: React.Ref<HTMLInputElement>;
  label?: React.ReactNode;
  error?: React.ReactNode | boolean;
  wrapperClassName?: string;
};

export function Input({
  ref,
  label,
  error,
  id,
  name,
  className,
  wrapperClassName,
  required,
  disabled,
  ...props
}: Props) {
  const inputId = id ?? name;
  const hasError = Boolean(error);

  return (
    <div className={clsx('flex flex-col gap-1.5', wrapperClassName)}>
      {label ? (
        <label htmlFor={inputId} className="text-sm font-medium">
          {label} {required ? <span aria-hidden="true">*</span> : null}
        </label>
      ) : null}

      <input
        ref={ref}
        id={inputId}
        name={name}
        required={required}
        disabled={disabled}
        aria-invalid={hasError || undefined}
        className={clsx(
          'w-full rounded border px-3 py-2 outline-none',
          disabled ? 'opacity-60' : '',
          hasError ? 'border-red-500' : 'border-neutral-300',
          className
        )}
        {...props}
      />

      {hasError && typeof error !== 'boolean' ? (
        <div className="text-xs text-red-500" role="alert">
          {error}
        </div>
      ) : null}
    </div>
  );
}
