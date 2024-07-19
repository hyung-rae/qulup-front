const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  /* config options here */
  assetPrefix: isProd === 'production' ? 'https://hyung-rae.github.io/qulup-front/' : undefined,
}

module.exports = nextConfig
