import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
