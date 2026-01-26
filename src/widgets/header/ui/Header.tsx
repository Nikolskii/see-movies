'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Drawer, Logo, ThemeToggle } from '@/shared/ui';
import { AuthButtons } from '@/widgets/header/ui/AuthButtons';
import { BurgerButton } from '@/widgets/header/ui/BurgerButton';
import { DesktopNav } from '@/widgets/header/ui/DesktopNav';
import { MobileMenu } from '@/widgets/header/ui/MobileMenu';
import { ProfileLink } from '@/widgets/header/ui/ProfileLink';

type Props = {
  isAuthorized: boolean;
};

// TODO: исключить скачек из-за кнопки переключения тем

export function Header({ isAuthorized }: Props) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showDesktopNav = isAuthorized;
  const showBurger = isAuthorized;

  const authSlot = isAuthorized ? (
    <div className="hidden lg:inline">
      <ProfileLink />
    </div>
  ) : (
    <AuthButtons />
  );

  return (
    <>
      <header className="flex min-h-[74px] items-center justify-between px-3.5 md:px-[30px] lg:px-[50px]">
        <Logo />
        {showDesktopNav ? <DesktopNav pathname={pathname} /> : null}
        <div className="flex items-center gap-[30px]">
          <ThemeToggle />
          {authSlot}
          {showBurger ? <BurgerButton handleClick={() => setIsMenuOpen(true)} /> : null}
        </div>
      </header>
      <Drawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <MobileMenu pathname={pathname} />
      </Drawer>
    </>
  );
}
