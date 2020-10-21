const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');
const { PORT } = require('./config');
const { resolveApp } = require('./util');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    path: resolveApp('dist'),
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: resolveApp('public'),
    open: true,
    host: '0.0.0.0',
    useLocalIp: true,
    port: PORT,
    hot: true,
    progress: true,
    overlay: true,
    clientLogLevel: 'silent',
    historyApiFallback: true,
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/ad-phenix-adsounds': {
        target: 'http://e.test.ximalaya.com',
        changeOrigin: true,
        secure: false
      }
    },
    disableHostCheck: true
  }
});
