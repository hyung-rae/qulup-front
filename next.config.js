const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  /* config options here */
  assetPrefix: isProd ? 'https://hyung-rae.github.io/qulup-front/' : '',
  basePath: isProd ? '/qulup-front' : '',
  images: {
    unoptimized: true, // 기본 로더를 사용하려면 unoptimized를 true로 설정
  },
}

module.exports = nextConfig
