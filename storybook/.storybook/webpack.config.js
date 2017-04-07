const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test:   /\.scss$/,
        loaders: ['style', 'raw', 'sass'],
        include: path.resolve(__dirname, '../css/')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};
