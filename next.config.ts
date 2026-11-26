import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  trailingSlash: true,
  turbopack: {},
  images: {
    unoptimized: true,
    localPatterns: [
      {
        pathname: "/horsecoder-storage/**",
      },
    ],
  },
  async rewrites() {
    if (process.env.NODE_ENV !== "development") {
      return [];
    }

    return [
      {
        source: "/mall-dialogue/:path*",
        destination: "http://30.0.0.58:30432/:path*",
        // destination: "http://localhost:30432/:path*",
      },
      {
        source: "/app-im/:path*",
        destination: "http://30.0.0.58:41329/:path*",
        //  destination: "http://localhost:45689/:path*",
      },
      {
        source: "/horsecoder-storage/:path*",
        destination: "http://30.0.0.221:10104/:path*",
      },
      {
        source: "/horsecoder-identity/:path*",
        destination: "http://30.0.0.221:10100/:path*",
      },
      {
        source: "/horsecoder-pay/:path*",
        destination: "http://30.0.0.221:10101/:path*",
        // destination: "http://localhost:10101/:path*",
      },
    ];
  },
};

export default nextConfig;