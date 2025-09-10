/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para GitHub Pages (exportación estática)
  output: 'export',
  trailingSlash: true,
  basePath: '/intranet-moderna',
  assetPrefix: '/intranet-moderna/',
  images: {
    unoptimized: true, // Requerido para exportación estática
    domains: ['localhost', '192.168.100.73'],
  },
  // Configuración limpia para GitHub Pages
  distDir: 'out',
}

module.exports = nextConfig
