// next.config.mjs
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

/** Derive __dirname in ESM */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Bundle everything your server code touches
    output: 'standalone',
    outputFileTracingRoot: __dirname,

    webpack: (config, { isServer }) => {
        if (isServer) {
            // Externalize Lighthouse and chrome-aws-lambda
            config.externals = config.externals || [];
            config.externals.push({
                lighthouse: 'commonjs lighthouse',
                'chrome-aws-lambda': 'commonjs chrome-aws-lambda',
            });

            // Silence import.meta warnings in Lighthouse
            config.ignoreWarnings = [
                /Critical dependency: the request of a dependency is an expression/,
                /Critical dependency: Accessing import\.meta directly is unsupported/,
            ];
        }
        return config;
    },

    // Ensure these packages don't get bundled client‑side
    serverExternalPackages: ['lighthouse', 'chrome-aws-lambda'],

    async headers() {
        return [
            {
                source: '/api/audit',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-cache, no-store, must-revalidate',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;