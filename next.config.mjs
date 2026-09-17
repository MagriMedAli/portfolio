/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Placeholder project screenshots are SVGs; switch this off once you
    // swap in real raster screenshots (PNG/JPG) if you want optimization.
    unoptimized: true,
  },
};

export default nextConfig;
