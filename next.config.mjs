/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/src/app/page.js',
      },
    ]
  },
};

export default nextConfig;
