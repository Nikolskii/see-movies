'use client';

import { useRef, useState } from 'react';

import { User, useUser } from '@/entities/user';
import { EditProfileForm } from '@/features/edit-profile';
import { Modal } from '@/shared/ui';

// TODO:  переименовать секцию
export function EditProfileSection() {
  const okBtnRef = useRef<HTMLButtonElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, setUser } = useUser();
  const { name, email } = user;

  const handleSuccess = (updatedUser: User) => {
    setIsModalOpen(true);
    setUser(updatedUser);
  };

  return (
    <>
      <EditProfileForm defaultValues={{ name, email }} onSuccess={handleSuccess} />
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        Успешно обновлено
        <button ref={okBtnRef}>OK</button>
      </Modal>
    </>
  );
}
