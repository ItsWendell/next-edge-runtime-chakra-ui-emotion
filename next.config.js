/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        emotion: true,
    },
    experimental: {
        runtime: 'experimental-edge',
    },
}

module.exports = nextConfig;