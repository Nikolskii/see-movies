'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { SigninForm } from '@/features/auth/';
import { routes } from '@/shared/routes';
import { Modal } from '@/shared/ui';
import { SigninSuccessModal } from '@/ui-pages/signin/ui/SignupSuccessModal';

export function SigninController() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const handleFormSuccess = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    router.replace(routes.movies);
  };

  return (
    <>
      <SigninForm onSuccess={handleFormSuccess} />;
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <SigninSuccessModal />
      </Modal>
    </>
  );
}
