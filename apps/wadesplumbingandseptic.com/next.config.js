/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["wadesplumbingandseptic.byronw35.sg-host.com", "lh3.googleusercontent.com"],
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
