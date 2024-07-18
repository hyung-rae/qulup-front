/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: process.env.NEXT_PUBLIC_NODE_ENV === 'local' ? '/' : 'https://hyung-rae.github.io/qulup-front/',
}

export default nextConfig
