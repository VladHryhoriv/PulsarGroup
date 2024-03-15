/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve, join } = require('path')
const { DefinePlugin, ids } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const TerserPlugin = require('terser-webpack-plugin')

const getClientEnvironment = require('./env')

const paths = require('./paths')

const DIST = resolve(__dirname, '..', 'dist')
const ENTRY_PATH = resolve(__dirname, '..', 'src/app/index.tsx')
const ENTRY_HTML_FILE = resolve(__dirname, '..', 'public/index.html')

const env = getClientEnvironment('')
const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  target: isDevelopment ? 'web' : 'browserslist',
  entry: {
    index: ['react-hot-loader/patch', ENTRY_PATH],
  },
  output: {
    path: DIST,
    filename: '[name].bundle.js',
    chunkFilename: 'chunk-[name].[contenthash].js',
    publicPath: '/',
    pathinfo: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css'],
    alias: {
      features: paths.features,
      lib: paths.lib,
      ui: paths.ui,
      api: paths.api,
      pages: paths.pages,
      assets: paths.assets,
      mocks: paths.mocks,
      icons: paths.icons,
      shared: paths.shared,
      entities: paths.entities,
      processes: paths.processes,
      ...(isDevelopment ? { 'react-dom': '@hot-loader/react-dom' } : undefined),
    },
    modules: [join(__dirname, 'src'), 'node_modules'],
    fallback: {
      'crypto': false,
      'crypto-browserify': require.resolve('crypto-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|png|woff|woff2|eot|ttf|svg|webp|avif|mp3)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /.(png|jpe?g|gif|webp|avif)$/i,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new ids.HashedModuleIdsPlugin({
      hashFunction: 'md4',
      hashDigest: 'base64',
      hashDigestLength: 4,
    }),
    new DefinePlugin(env.stringified),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Pulsar Group',
      inject: 'body',
      chunks: ['vendor', 'index'],
      chunksSortMode: 'manual',
      template: ENTRY_HTML_FILE,
      favicon: resolve(__dirname, '..', 'public/favicon.ico'),
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            // we want terser to parse ecma 8 code. However, we don't want it
            // to apply any minfication steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the 'compress' and 'output'
            // sections only apply transformations that are ecma 5 safe
            // https://github.com/facebook/create-react-app/pull/4234
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebook/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false,
            // Disabled because of an issue with Terser breaking valid code:
            // https://github.com/facebook/create-react-app/issues/5250
            // Pending futher investigation:
            // https://github.com/terser-js/terser/issues/120
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            ascii_only: true,
          },
        },
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        parallel: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      cacheGroups: {
        'default': false,
        'vendors': {
          test: /node_modules\/(?!@lingui|formik|react-phaser-wrapper|sloudly-core-canvas\/).*/,
          name: 'vendors',
          chunks: 'all',
        },
        '@lingui': {
          test: /node_modules\/(@lingui\/).*/,
          name: 'lingui',
          chunks: 'all',
        },
        'formik': {
          test: /node_modules\/(formik\/).*/,
          name: 'formik',
          chunks: 'all',
        },
        'react-phaser-wrapper': {
          test: /node_modules\/(react-phaser-wrapper\/).*/,
          name: 'react-phaser-wrappe',
          chunks: 'all',
        },
        'sloudly-core-canvas': {
          test: /node_modules\/(sloudly-core-canvas\/).*/,
          name: 'sloudly-core-canvas',
          chunks: 'all',
        },
        // common chunk
        'common': {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },
}
