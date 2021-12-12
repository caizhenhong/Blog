const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolve = dir => path.resolve(path.resolve(__dirname, '../'), dir);

const rules = [
  {
    test: /\.(svg|png|jpg)$/i,
    type: 'asset',
    parser: { dataUrlCondition: { maxSize: 0.5 * 1024 } },
  },

  {
    test: /(\.less$|\.css$)/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
  },

  {
    test: /\.jsx*$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/transform-runtime'],
      },
    },
  },
];

module.exports = {
  entry: resolve('src/index.js'),

  resolve: {
    alias: { '@': resolve('src') },
    extensions: ['.js', '.jsx'],
    mainFiles: ['index'],
  },

  module: { rules },

  plugins: [
    new HtmlWebpackPlugin({ template: resolve('public/index.html') }),
    new MiniCssExtractPlugin(),
  ],
};
