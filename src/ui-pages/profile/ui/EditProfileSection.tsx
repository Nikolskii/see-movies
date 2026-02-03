'use client';

import { useRouter } from 'next/navigation';

import { User, useUser } from '@/entities/user';
import { EditProfileForm } from '@/features/edit-profile';

export function EditProfileSection() {
  const router = useRouter();
  const { user, setUser } = useUser();
  const { name, email } = user;

  const handleSuccess = (updatedUser: User) => {
    setUser(updatedUser);
    // router.refresh();
  };

  return <EditProfileForm defaultValues={{ name, email }} onSuccess={handleSuccess} />;
}
