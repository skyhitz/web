Object.values = obj => Object.keys(obj).map(key => obj[key]);

const { withPlugins, optional } = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const {
  PHASE_PRODUCTION_BUILD,
  PHASE_DEVELOPMENT_SERVER
} = require('next/constants');

let nextConfig = {
  target: 'serverless',
  env: {
    SKYHITZ_ENV: '@SKYHITZ_ENV',
    FACEBOOK_APP_ID: '@FACEBOOK_APP_ID',
    STRIPE_PUBLISHABLE_KEY: '@STRIPE_PUBLISHABLE_KEY'
  },
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/terms-of-use': { page: '/terms-of-use' },
      '/privacy-policy': { page: '/privacy-policy' }
    };
  },
  webpack(config, options) {
    const { dir, defaultLoaders, isServer, dev } = options;

    extractCSSPlugin = new MiniCssExtractPlugin({
      filename: 'static/[name].css'
    });
    config.plugins.push(extractCSSPlugin);

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: 'css-loader',
          options: {
            minimize: !dev,
            sourceMap: dev
          }
        },
        {
          loader: 'sass-loader'
        }
      ]
    });

    config.module.rules.push({
      test: /\.ts$/,
      use: [
        defaultLoaders.babel,
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      ]
    });

    return config;
  }
};

module.exports = withPlugins(
  [
    withTypescript,
    [
      optional(() => require('next-offline')),
      {
        workboxOpts: {
          swDest: 'static/service-worker.js',
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: 'networkFirst',
              options: {
                cacheName: 'https-calls',
                networkTimeoutSeconds: 15,
                expiration: {
                  maxEntries: 150,
                  maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ]
        }
      },
      [PHASE_PRODUCTION_BUILD]
    ],
    [
      optional(() => require('@zeit/next-bundle-analyzer')),
      {
        analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ['browser', 'both'].includes(
          process.env.BUNDLE_ANALYZE
        ),
        bundleAnalyzerConfig: {
          server: {
            analyzerMode: 'static',
            reportFilename: '../../bundles/server.html'
          },
          browser: {
            analyzerMode: 'static',
            reportFilename: '../bundles/client.html'
          }
        }
      },
      [PHASE_DEVELOPMENT_SERVER]
    ]
  ],
  nextConfig
);
