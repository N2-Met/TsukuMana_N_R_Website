/** @type {import('next-sitemap').config} */
const config = {
  siteUrl: "https://*********",
  // outDir: "./out",
  exclude: ["server-sitemap.xml"],
  rebotsTxtOptions: {
    additionalSitemaps: ["https://*********/server-sitemap.xml"],
  },
};

module.exports = config;
