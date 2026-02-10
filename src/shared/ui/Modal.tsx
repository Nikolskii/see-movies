'use client';

import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// TODO: добавить документацию модалки
// TODO: анимировать открытие/закрытие
// TODO: стилизовать крестик закрытия

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  lockScroll?: boolean;
  restoreFocus?: boolean;
  initialFocusRef?: React.RefObject<HTMLElement | null>;
};

const MODAL_ROOT_ID = 'modal-root';

export function Modal({
  open,
  onClose,
  children,
  initialFocusRef,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  lockScroll = true,
  restoreFocus = true,
}: Props) {
  const lastActiveRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // ESC
  useEffect(() => {
    if (!open || !closeOnEsc) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, closeOnEsc, onClose]);

  // lock scroll + restore focus + initial focus
  useEffect(() => {
    if (!open) return;

    // 1) сохранить фокус ДО модалки
    lastActiveRef.current = document.activeElement as HTMLElement | null;

    // 2) lock scroll
    const prevOverflow = document.body.style.overflow;
    if (lockScroll) document.body.style.overflow = 'hidden';

    // 3) initial focus внутрь модалки (после монтирования)
    queueMicrotask(() => {
      (initialFocusRef?.current ?? closeBtnRef.current)?.focus?.();
    });

    // cleanup: вернуть скролл и фокус
    return () => {
      if (lockScroll) document.body.style.overflow = prevOverflow;
      if (restoreFocus) lastActiveRef.current?.focus?.();
    };
  }, [open, lockScroll, restoreFocus, initialFocusRef]);

  if (!open) return null;

  const container =
    (typeof document !== 'undefined' &&
      (document.getElementById(MODAL_ROOT_ID) ?? document.body)) ||
    null;

  if (!container) return null;

  const content = (
    <div className="z-modal fixed inset-0">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Centered panel */}
      <div
        className="absolute inset-0 flex items-center justify-center p-4"
        onClick={closeOnOverlayClick ? onClose : undefined}
      >
        <div
          role="dialog"
          aria-modal="true"
          className="bg-light-900 relative w-full max-w-[520px] rounded-xl shadow-xl dark:bg-neutral-900"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="action-fade absolute top-4 right-4 cursor-pointer"
            ref={closeBtnRef}
          >
            <X size={24} />
          </button>

          <div className="px-6 pt-4 pb-6">{children}</div>
        </div>
      </div>
    </div>
  );

  return createPortal(content, container);
}
