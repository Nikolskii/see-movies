'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { SignupForm } from '@/features/auth';
import { routes } from '@/shared/routes';
import { Modal } from '@/shared/ui/Modal';
import { SignupSuccessModal } from '@/ui-pages/signup/ui/SignupSuccessModal';

export function SignupController() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const handleFormSuccess = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    router.push(routes.signin);
  };

  return (
    <>
      <SignupForm onSuccess={handleFormSuccess} />
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <SignupSuccessModal />
      </Modal>
    </>
  );
}
