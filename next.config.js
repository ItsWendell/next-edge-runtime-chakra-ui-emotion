/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        emotion: true,
    },
    experimental: {
        runtime: 'experimental-edge',
    },
    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig;