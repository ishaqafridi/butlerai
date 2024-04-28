/** @type {import('next').NextConfig} */
const nextConfig = {
    // Export as a static site (optional)
  output: 'export',
  // Override the default webpack configuration
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "sharp$": false,
      "onnxruntime-node$": false,
    };
    return config;
  },
};
export default nextConfig;
