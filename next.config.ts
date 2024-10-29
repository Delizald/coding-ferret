import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true
  },
  assetPrefix: "./",
};

export default nextConfig;
