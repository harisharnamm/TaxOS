/** @type {import('next').NextConfig} */

// https://nextjs.org/docs/app/api-reference/next-config-js
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Ensure Next.js uses the correct output directory
  distDir: '.next',
  // Explicitly set the output setting to be compatible with Vercel
  output: 'standalone',
  // Add trailing slashes to URLs
  trailingSlash: false
}

module.exports = nextConfig
