/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore linting errors during production builds
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  // Add this line to disable SWC plugins
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;

