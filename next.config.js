module.exports = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    disableStaticImages: true
  }
}

const withImages = require('next-images')
//const withOptimizedImages = require('next-optimized-images');
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"],
  esModule: true,
  webpack(config, options) {
    return config
  },
})
/*module.exports = withOptimizedImages({
  handleImages: ["jpg", "jpeg", "png", "gif", "svg"],
  imagesFolder: 'media',
})*/

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

const production = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: production ? '/racing.landing/' : '',
  images: {
    loader: 'custom',
  },
}
