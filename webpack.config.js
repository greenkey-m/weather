const path = require('path');

// webpack.config.js
const webpack = require('webpack')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              outputPath: ''
            }
          },
          //{
          // Adds CSS to the DOM by injecting a `<style>` tag
          // This loader using when disable file-loader, to include css into bundle.js
          //loader: 'style-loader'
          //},
          //{
          // Interprets `@import` and `url()` like `import/require()` and will resolve them
          // This loader using when disable file-loader, to include css into bundle.js
          //loader: 'css-loader'
          //},
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  watch: true,
  devtool: "source-map",
  // This remove jquery code from bundle to use external CDN
  externals: {
    //jquery: 'jQuery'
  }
};
