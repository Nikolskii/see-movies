import Image from 'next/image';

export function EditProfileSuccessModal() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image alt="Профиль успешно обновлен" src="/icons/success.svg" width={120} height={120} />
      <h2 className="text-xl">Профиль успешно обновлен</h2>
    </div>
  );
}
