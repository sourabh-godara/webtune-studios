import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "webtunestudios.in",
          },
        ],
        destination: "https://www.webtunestudios.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
