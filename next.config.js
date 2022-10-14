/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'micbelback.local'],
    formats: ['image/avif', 'image/webp']
  },
}

module.exports = nextConfig
