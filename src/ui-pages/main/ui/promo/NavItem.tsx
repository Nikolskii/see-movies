export function NavItem({ text, href }: NavItemProps) {
  return (
    <li className="action-fade dark:bg-dark-600 bg-light-600 md:rounded-10 flex min-h-[26px] w-[82px] items-center justify-center rounded-md text-xs font-medium md:min-h-[36px] md:w-[96px]">
      <a href={href}>{text}</a>
    </li>
  );
}

type NavItemProps = {
  text: string;
  href: string;
};
