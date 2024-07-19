const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  basePath: isProd ? '/qulup-front' : '',
  assetPrefix: isProd ? 'https://hyung-rae.github.io/qulup-front/' : '',
  images: {
    unoptimized: true, // 기본 로더를 사용하려면 unoptimized를 true로 설정
  },
}

module.exports = nextConfig
