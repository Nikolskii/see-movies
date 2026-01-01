type Params = {
  pathname: string;
  href: string;
};

export function isRouteActive({ pathname, href }: Params): boolean {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}
