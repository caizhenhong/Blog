module.exports = {
  mode: "development",
  
  devtool: "eval-source-map",

  devServer: {
    hot: true,
    port: 8080,
    compress: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    client: { logging: 'error', overlay: true },
  }
}
