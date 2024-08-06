const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: false,
  basePath: isProd ? '/qulup-front' : '',
  assetPrefix: isProd ? 'https://hyung-rae.github.io/qulup-front/' : '',
  images: {
    unoptimized: true, // 기본 로더를 사용하려면 unoptimized를 true로 설정
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://3.35.131.46/api/:path*', // Spring Boot 서버 URL로 프록시 설정
      },
    ]
  },
}

module.exports = nextConfig
