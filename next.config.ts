import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }, { protocol: 'http', hostname: '**' }],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // No eslint block here!
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;