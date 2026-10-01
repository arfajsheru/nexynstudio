import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/whatsapp",
        destination:
          "https://wa.me/918591013795?text=Hi%20Nexyn%20Studios%2C%20I%20would%20like%20to%20inquire%20about%20a%20custom%20software%20project.",
        permanent: false,
      },
      {
        source: "/chat",
        destination:
          "https://wa.me/918591013795?text=Hi%20Nexyn%20Studios%2C%20I%20would%20like%20to%20inquire%20about%20a%20custom%20software%20project.",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|woff|woff2|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
