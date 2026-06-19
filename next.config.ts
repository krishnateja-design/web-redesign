import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['www.proveitcatalysts.com'],
    formats: ['image/avif', 'image/webp'],
  },
  sassOptions: {
    includePaths: ['./src'],
  },
};

export default nextConfig;
