import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    webpack: (config, { isServer }) => {
        // Modify webpack config to exclude unused heavy dependencies like @vercel/og which causes build issues on Windows
        if (isServer) {
            config.resolve.alias['@vercel/og'] = false;
        }
        return config;
    },
};

export default nextConfig;
