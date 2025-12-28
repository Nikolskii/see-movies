'use client';

import { X } from 'lucide-react';
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
// TODO: уточнит какой z index у контейнера

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
        className="bg-light-900 absolute top-0 right-0 h-full w-full max-w-[520px] dark:bg-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="action-fade absolute top-4 right-4 md:top-[30px] md:right-[30px]"
        >
          <X size={30} />
        </button>
        <div className="min-h-0 overflow-auto">{children}</div>
      </div>
    </div>
  );

  return createPortal(content, container);
}
