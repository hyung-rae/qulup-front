/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://hyung-rae.github.io/qulup-front' : '',
}

export default nextConfig
