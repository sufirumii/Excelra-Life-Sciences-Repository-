import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Render.com runs `next start` with a full node_modules tree, so the
     standalone output mode is unnecessary and only complicates the runtime
     bind (it defaults to localhost). Standard `next build` + `next start`
     is Render's recommended path and binds to 0.0.0.0:$PORT correctly. */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: ["*.space-z.ai", "*.chatglm.cn"],
};

export default nextConfig;
