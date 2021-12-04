const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const ui_path = resolve(__dirname, '../')

const rules = [
  {
    test: /\.(svg|png|jpg)$/i,
    type: 'asset',
    parser: { dataUrlCondition: { maxSize: 4 * 1024 } }
  },
  {
    test: /(\.less$|\.css$)/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
  }
]

module.exports = {
  entry: resolve(ui_path, 'src/index.js'),

  resolve: {
    alias: { '@': resolve(ui_path, '/src') },
    extensions: ['.js', '.jsx'],
    mainFiles: ['index']
  },

  module: { rules },

  plugins: [
    new HtmlWebpackPlugin({ template: resolve(ui_path, 'public/index.html') }),
    new MiniCssExtractPlugin()
  ]
}
