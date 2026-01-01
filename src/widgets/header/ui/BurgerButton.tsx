import { Menu } from 'lucide-react';

type Props = {
  handleClick: () => void;
};

export function BurgerButton({ handleClick }: Props) {
  return (
    <button className="action-fade cursor-pointer lg:hidden" onClick={handleClick}>
      <Menu size={30} />
    </button>
  );
}
