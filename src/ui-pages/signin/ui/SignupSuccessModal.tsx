import Image from 'next/image';

export function SigninSuccessModal() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image alt="Вы успешно вошли в аккаунт" src="/icons/success.svg" width={120} height={120} />
      <h2 className="text-xl">Вы успешно вошли в аккаунт</h2>
    </div>
  );
}
