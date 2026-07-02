import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.proveitcatalysts.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  sassOptions: {
    includePaths: ['./src'],
  },
};

export default nextConfig;
