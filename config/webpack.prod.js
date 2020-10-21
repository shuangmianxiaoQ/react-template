const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const common = require('./webpack.common');
const { publicUrl } = require('./config');
const { resolveApp } = require('./util');

const isEnvTest = process.env.BUILD_ENV === 'test';
const isEnvAnalyze = process.env.BUILD_ENV === 'analyze';

console.log('BUILD_ENV: ' + process.env.BUILD_ENV);

module.exports = merge(common, {
  mode: 'production',
  devtool: isEnvTest ? 'eval-cheap-module-source-map' : '',
  entry: './src/index.tsx',
  output: {
    path: resolveApp('dist'),
    publicPath: publicUrl[process.env.BUILD_ENV],
    filename: 'js/[name].[contenthash:5].js',
    chunkFilename: 'js/[name].[contenthash:5].chunk.js'
  },
  plugins: [isEnvAnalyze && new BundleAnalyzerPlugin()].filter(Boolean)
});
