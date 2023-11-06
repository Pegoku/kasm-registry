/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Pegoku Kasm Registry',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://pegoku.github.io/kasm-registry/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
