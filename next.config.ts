console.log("Clerk env at startup:", {
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.slice(0, 20),
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY
    ? `set (length ${process.env.CLERK_SECRET_KEY.length})`
    : "MISSING",
  CLERK_FRONTEND_API_URL: process.env.CLERK_FRONTEND_API_URL,
});

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
