const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {      // Babel
      test: /\.js$/, 
      exclude: /(node_modules)/, 
      use: { 
          loader:  "babel-loader",
          options: {
            presets: ["@babel/preset-env"] 
          }
        }
      }, {   // SASS
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          }, {
            loader: "css-loader",
          }, {
            loader: "postcss-loader",
          }, {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ],

  mode: 'development'
};