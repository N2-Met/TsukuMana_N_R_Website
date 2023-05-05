/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "https://images.microcms-assets.io/assets/",
    domains: ["images.microcms-assets.io"],
  },
};

module.exports = nextConfig;
