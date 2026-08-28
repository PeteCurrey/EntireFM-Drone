import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['gsap', '@mkkellogg/gaussian-splats-3d', 'three'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/gaussian-splat',
        destination: '/tfts-3d',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
