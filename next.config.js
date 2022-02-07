module.exports = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    disableStaticImages: true
  }
}

const withImages = require('next-images')
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"],
  esModule: true,
  webpack(config, options) {
    return config
  }
})

const withVideos = require('next-videos')
module.exports = withVideos()


module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(mp4)$/,
        loader: 'file'
      },
      {
        test: [/\.webm$/, /\.mp4$/, /\.ogv?g$/],
        use: [{
        loader: 'file-loader'
        },
      ]
    }
    ],
  }
};