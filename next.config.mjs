/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore linting errors during production builds
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
};

export default nextConfig;
