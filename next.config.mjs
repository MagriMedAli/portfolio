/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Screenshots are large PNGs — let Next resize them and serve WebP/AVIF.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
