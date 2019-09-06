var webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
              loader: "sass-loader",
              options: {
                  includePaths: [path.resolve(__dirname, "./src")]
              }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
  resolve: {
    modules: [
        'node_modules',
        path.resolve(__dirname + '/src')
    ],
    alias: {
        src: path.resolve(__dirname + '/src')
    }
  }
};
