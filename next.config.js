/** @type {import('next').NextConfig} */

//設定ファイルなので反映させるには

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "",
    domains: ["images.microcms-assets.io"],
  },
};

module.exports = nextConfig;
