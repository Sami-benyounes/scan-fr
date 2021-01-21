const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
 
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "./public/app.js"),
  output: {
    path: __dirname + "/dist",
    filename: "app_bundle.js"
  },
  stats: {
    errors: false
  },
  
    module: {
        rules: [
          {
            test: /\.ejs$/,
            use: {
              loader: 'ejs-compiled-loader',
              options: {
                htmlmin: true,
                htmlminOptions: {
                  removeComments: true
                }
              }
            }
          },
            {
              test: /\.s[ac]ss$/i,
              use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
            },
            {
              test: /\.(png|jpe?g|gif|svg)$/,
              use:[{
                  loader: 'file-loader',
                  options: {
                    name: '/images/[name].[ext]'
                  }
              }],
            },
        ]
    },
 
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/pages/mangas/mangas.ejs"),
            filename: 'mangas.html'
         }),
    ]
}