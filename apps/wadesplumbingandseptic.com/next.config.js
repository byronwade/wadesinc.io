/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["wadesplumbingandseptic.byronw35.sg-host.com", "lh3.googleusercontent.com"],
	},
	experimental: {
		appDir: true,
		typedRoutes: true,
	},
};

module.exports = nextConfig;
