import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "localhost:3000",
    "192.168.29.4:3000" // Use your computer's exact network IP here
  ],
  
};


export default nextConfig;
