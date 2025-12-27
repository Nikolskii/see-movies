'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';

import { useUser } from '@/entities/user';
import { AuthButtons } from '@/features/auth';
import { ProfileLink } from '@/features/profile';
import { Drawer, Logo, ThemeToggle } from '@/shared/ui';

export function Header() {
  const { isAuthorized } = useUser();
  // TODO: как назвать эту переменную?
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

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
            onClick={() => setIsMenuDrawerOpen(true)}
          >
            <Menu size={30} />
          </button>
        ) : null}
      </header>
      <Drawer open={isMenuDrawerOpen} onClose={() => setIsMenuDrawerOpen(false)}>
        <div>Контент drawer</div>
      </Drawer>
    </>
  );
}
