/* eslint-disable @typescript-eslint/no-var-requires */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  async redirects() {
    return [
      {
        source: '/analytics',
        destination: '/info',
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    // Suppressing abi JSON import warnings in @uniswap/v3-sdk/dist/v3-sdk.esm.js
    // https://webpack.js.org/migrate/5/#using-named-exports-from-json-modules
    config.ignoreWarnings = [
      {
        module: /.\/node_modules.*v3-sdk.*.js$/,
        message: /only default export is available soon/,
      },
    ];

    return config;
  },
});
