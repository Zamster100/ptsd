/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Configure the source directory
  experimental: {
    // Optimize for production
    optimizePackageImports: ['react', 'react-dom'],
  },

  // Output configuration for Vercel
  output: 'standalone',
}

export default nextConfig
