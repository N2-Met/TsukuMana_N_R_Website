/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    // P.334　静的サイトジェネレーターとして出力する　miss
    // loader: "imgix",
    // path: "https://images.microcms-assets.io/assets/",
    domains: ["images.microcms-assets.io"],
  },
};

module.exports = nextConfig;
