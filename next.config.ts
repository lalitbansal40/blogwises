import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// next.config.js
module.exports = {
  images: {
    domains: [
      'images.unsplash.com',
      'lalitbansal2004.s3.us-east-1.amazonaws.com',
      "drive.google.com",
      "i.ytimg.com",
      "images.unsplash.com",
      "media.geeksforgeeks.org",
      "images.pexels.com",
      "bsmedia.business-standard.com",
      "media2.dev.to"
    ],
  },
};


export default nextConfig;
