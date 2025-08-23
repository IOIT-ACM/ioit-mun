/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hosteze-little-boy.s3.ap-south-1.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
