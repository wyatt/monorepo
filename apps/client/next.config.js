const withPreconstruct = require('@preconstruct/next');

const nextConfig = {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'no-cache, no-store',
					},
				],
			},
		];
	},
};

module.exports = withPreconstruct({...nextConfig});
