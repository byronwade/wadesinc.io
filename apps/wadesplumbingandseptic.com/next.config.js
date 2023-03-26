/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["wadesplumbingandseptic.byronw35.sg-host.com"],
	},
	experimental: {
		appDir: true,
		nextScriptWorkers: true,
	},
};

module.exports = nextConfig;
