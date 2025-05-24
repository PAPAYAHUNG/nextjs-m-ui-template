import config from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: config.i18n,
  experimental: {
    serverExternalPackages: [],
  }
};

export default nextConfig; 