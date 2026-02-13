import Image from 'next/image';

export function SignupSuccessModal() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image
        alt="Вы успешно зарегистрировались"
        src="/icons/success.svg"
        width={120}
        height={120}
      />
      <h2 className="text-xl">Вы успешно зарегистрировались</h2>
    </div>
  );
}
