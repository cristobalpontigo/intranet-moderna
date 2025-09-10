/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para GitHub Pages (exportación estática)
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/intranet-moderna' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/intranet-moderna/' : '',
  images: {
    unoptimized: true, // Requerido para exportación estática
    domains: ['localhost', '192.168.100.73'],
  },
  // Permitir acceso desde otros hosts en la red
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
