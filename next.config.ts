import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  // Unique build ID per build → alle /_next/static/-Assets bekommen neue Pfade
  // → Browser und CDN-Caches werden automatisch invalidiert
  generateBuildId: () => `build-${Date.now()}`,
};

export default nextConfig;
