/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Handle Lighthouse dependencies that use import.meta
      config.externals = config.externals || [];
      config.externals.push({
        'lighthouse': 'commonjs lighthouse',
        'chrome-launcher': 'commonjs chrome-launcher'
      });
      
      // Ignore warnings about import.meta usage
      config.ignoreWarnings = [
        /Critical dependency: the request of a dependency is an expression/,
        /Critical dependency: Accessing import\.meta directly is unsupported/
      ];
    }
    
    return config;
  },
  
  // External packages for server-side rendering
  serverExternalPackages: ['lighthouse', 'chrome-launcher'],
  
  // Headers for audit endpoint
  async headers() {
    return [
      {
        source: '/api/audit',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
