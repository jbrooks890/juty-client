/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // ::::::::::::::[ SVG EXTENSIONS ]::::::::::::::
    config.module.rules.push({
      test: /(?<!\-image)\.svg$/, // LOOK BEHIND NOT SUPPORTED IN ALL BROWSERS
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
