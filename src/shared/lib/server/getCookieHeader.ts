import 'server-only';

import { cookies } from 'next/headers';

export async function getCookieHeader() {
  const cookieStore = await cookies();
  return cookieStore.toString();
}
