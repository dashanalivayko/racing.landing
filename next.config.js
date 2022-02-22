module.exports = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    disableStaticImages: true
  }
}

const withImages = require('next-images')
const withOptimizedImages = require('next-optimized-images');
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"],
  esModule: true,
  webpack(config, options) {
    return config
  },
})
module.exports = withOptimizedImages({
  handleImages: ["jpg", "jpeg", "png", "gif", "svg"],
  imagesFolder: 'media',
})

const withVideos = require('next-videos')
module.exports = withVideos(
  {
    fileExtensions: ["mp4"],
    esModule: true,
    webpack(config, options) {
      return config
    }
  }
)


module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'loader',
          },
        ],
      },
      {
        test: /\.(mp4)$/,
        loader: 'loader'
      },
      {
        test: [/\.webm$/, /\.mp4$/, /\.ogv?g$/],
        use: [{
        loader: 'loader'
        },
      ]
    }
    ],
  }
};


const production = process.env.NODE_ENV === 'production'

module.exports = {
  // assetPrefix: production ? '/racing.landing/' : '',
  images: {
    loader: 'custom',
  },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/game': { page: '/game' },
  //   }
  // },
}