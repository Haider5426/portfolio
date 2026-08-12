import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 requires non-default quality values to be allowlisted.
    qualities: [62, 75],
    // The hero portrait renders at ~150px CSS wide on phones. Without a 512
    // candidate a DPR-3 device jumps straight to the 640 variant, which is
    // noticeably more bytes on the critical path for no visible gain.
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 512],
  },
};

export default nextConfig;
