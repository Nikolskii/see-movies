import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://api.nomoreparties.co/**')],
  },
};

export default nextConfig;
