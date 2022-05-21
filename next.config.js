/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'maderasbarber.com'],
    // formats: ["image/avif", "image/webp", "image/jpg", "image/jpg"],
  },
};

module.exports = nextConfig;
