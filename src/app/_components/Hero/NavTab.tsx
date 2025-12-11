import { NavItem } from '@/app/_components/Hero/NavItem';

const links = [
  { name: 'О проекте', href: '#about' },
  { name: 'Технологии', href: '#technologies' },
  { name: 'Студент', href: '#student' },
];

export function NavTab() {
  return (
    <nav>
      <ul className="flex gap-2 md:gap-2.5">
        {links.map((link) => (
          <NavItem text={link.name} href={link.href} key={link.name} />
        ))}
      </ul>
    </nav>
  );
}
