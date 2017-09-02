module.exports = {
    entry: './src/index.js',
    output: {
      filename: './public/js/bundle.js'
    },
    module: {
        loaders: [
          {
            test: /\.js?$/,
            exclude: /node_modules/, 
            loader: "babel-loader", 
            query:
              {
                presets:['es2015', 'react']
              }
          },
          { test: /\.(css|scss|sass)?$/, loader: "style-loader!css-loader!sass-loader" },
          { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: "url-loader" }
        ]
    }
  };