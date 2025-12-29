'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';

import { useUser } from '@/entities/user';
import { AuthButtons } from '@/features/auth';
import { ProfileLink } from '@/features/profile';
import { Drawer, Logo, ThemeToggle } from '@/shared/ui';
import { MobileMenu } from '@/widgets/header/ui/MobileMenu';

export function Header() {
  const { isAuthorized } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between">
        <Logo />
        <ThemeToggle />
        {/* <div>{navigation}</div> */}
        {isAuthorized ? (
          <div className="hidden lg:inline">
            <ProfileLink />
          </div>
        ) : (
          <AuthButtons />
        )}
        {isAuthorized ? (
          <button
            className="action-fade cursor-pointer lg:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={30} />
          </button>
        ) : null}
      </header>
      <Drawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <MobileMenu />
      </Drawer>
    </>
  );
}
