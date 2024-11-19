import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'utfs.io',
  //       port: '',
  //       pathname: '/f/**',
  //     },
  //   ],
  // },
};

export default nextConfig;
