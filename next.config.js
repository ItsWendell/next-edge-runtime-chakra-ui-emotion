module.exports = async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        reactStrictMode: true,
        compiler: {
            emotion: true,
        },
        webpack: (config, ctx) => {
            if (ctx.nextRuntime === "edge") {
                if (!config.resolve.conditionNames) {
                    config.resolve.conditionNames = ['require', 'node'];
                }
                if (!config.resolve.conditionNames.includes("worker")) {
                    config.resolve.conditionNames.push("worker");
                }
            }
            return config;
        },
        experimental: {
            runtime: 'experimental-edge',
        },
    }
    return nextConfig
}