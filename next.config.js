/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 👇 This is the new way in Next.js 15
  output: 'export',

  images: {
    unoptimized: true, // GitHub Pages can't handle Next.js image optimization
  },

  // 👇 Only if deploying to https://amanuddinu4.github.io/portfolio
  // Remove this if deploying to root domain (amanuddinu4.github.io)
};

module.exports = nextConfig;