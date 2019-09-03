var path = require('path')
var webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

var PATHS = {
  entryPoint: path.resolve(__dirname, 'src/index.ts'),
  bundles: path.resolve(__dirname, '_bundles')
}

var config = {
  entry: {
    index: [PATHS.entryPoint]
  },
  // The output defines how and where we want the bundles. The special
  // value `[name]` in `filename` tell Webpack to use the name we defined above.
  // We target a UMD and name it MyLib. When including the bundle in the browser
  // it will be accessible at `window.MyLib`
  output: {
    path: PATHS.bundles,
    filename: '[name].js',
    libraryTarget: 'umd',
    library: '@committed/components',
    umdNamedDefine: true
  },
  // Add resolve for `tsx` and `ts` files, otherwise Webpack would
  // only look for common JavaScript file extension (.js)
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.svg',
      '.ts',
      '.tsx',
      '.mdx',
      '.png',
      '.jpg',
      '.gif',
      '.css'
    ]
  },
  // Activate source maps for the bundles in order to preserve the original
  // source when the user debugs the application
  devtool: 'source-map',
  // optomize the .min version
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        sideEffects: true,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        loader: 'file-loader',
        query: { name: '[path][name].[hash:8].[ext]' }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: false
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
