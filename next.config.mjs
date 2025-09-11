/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["local-origin.dev" ,"*.local-origin.dev","http://localhost:3000", "http://192.168.0.176:3000"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
