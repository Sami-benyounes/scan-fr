const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
        ]
    },
 
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css'
        })
    ]
}