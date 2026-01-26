type Props = {
  htmlFor: string;
  children: React.ReactNode;
};

export function InputLabel({ htmlFor, children }: Props) {
  return (
    <label htmlFor={htmlFor} className="text-[10px] text-gray-500">
      {children}
    </label>
  );
}
