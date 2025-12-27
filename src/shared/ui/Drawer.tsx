'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  lockScroll?: boolean;
};

const DRAWER_ROOT_ID = 'drawer-root';

// TODO: анимация открытия/закрытия
// TODO: разобраться как работает lockScroll

export function Drawer({
  open,
  onClose,
  children,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  lockScroll = true,
}: Props) {
  const lastActiveRef = useRef<HTMLElement | null>(null);

  // ESC
  useEffect(() => {
    if (!open || !closeOnEsc) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, closeOnEsc, onClose]);

  // lock scroll + restore focus
  useEffect(() => {
    if (!open) return;

    lastActiveRef.current = document.activeElement as HTMLElement | null;

    if (!lockScroll) {
      return () => lastActiveRef.current?.focus?.();
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;
      lastActiveRef.current?.focus?.();
    };
  }, [open, lockScroll]);

  if (!open) return null;

  const container =
    (typeof document !== 'undefined' &&
      (document.getElementById(DRAWER_ROOT_ID) ?? document.body)) ||
    null;

  if (!container) return null;

  // TODO: уточнит какой z index
  const content = (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />
      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        className="absolute top-0 right-0 h-full w-[320px] max-w-[90vw] bg-white p-4 shadow-lg dark:bg-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="rounded px-2 py-1"
          >
            ✕
          </button>
        </div>
        <div className="min-h-0 overflow-auto">{children}</div>
      </div>
    </div>
  );

  return createPortal(content, container);
}
