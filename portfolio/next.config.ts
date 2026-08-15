import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Every route here is pure SSG with no revalidate — the only way content
    // ever changes is a full redeploy, which invalidates this regardless. The
    // 300s default meant any visit more than 5 minutes after the last one hit
    // a cold RSC segment regeneration (1-3s+) for content that never changes
    // between deploys. A day-long window removes that cost for a low-traffic
    // site without any staleness risk.
    staleTimes: { static: 86400 },
  },
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
