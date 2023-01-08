/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  env: {
    PASSWORD: process.env.PASSWORD,
  },
};

module.exports = nextConfig;
