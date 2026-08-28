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
      {
        source: '/services/gaussian-splat-capture',
        destination: '/tfts-3d',
        permanent: true,
      },
      {
        source: '/industries',
        destination: '/sectors',
        permanent: true,
      },
      {
        source: '/industries/:slug',
        destination: '/sectors/:slug',
        permanent: true,
      },
      {
        source: '/industries/:slug/:service',
        destination: '/sectors/:slug',
        permanent: true,
      },
      // Service intent aliases / consolidations
      {
        source: '/services/drone-roof-surveys',
        destination: '/services/roof-inspections',
        permanent: true,
      },
      {
        source: '/services/commercial-drone-inspections',
        destination: '/services/drone-inspection',
        permanent: true,
      },
      {
        source: '/services/thermal-drone-surveys',
        destination: '/services/thermal-imaging',
        permanent: true,
      },
      {
        source: '/services/solar-pv-drone-inspections',
        destination: '/services/solar-panel-inspections',
        permanent: true,
      },
      {
        source: '/services/facade-cladding-drone-inspections',
        destination: '/services/facade-inspections',
        permanent: true,
      },
      {
        source: '/services/drone-surveying-mapping',
        destination: '/services/surveying-mapping',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
