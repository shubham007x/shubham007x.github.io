import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For GitHub Pages deployment
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'shubham007x.github.io',
      },
    ],
  },
};

export default nextConfig;
