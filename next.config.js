/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 👇 Add these for GitHub Pages
  output: 'export',        // ensures static HTML export
  images: {
    unoptimized: true      // required since GitHub Pages can't optimize images
  },

};

module.exports = nextConfig;
