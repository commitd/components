/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: { esmExternals: "loose" },
  transpilePackages: [
    '@committed/ds',
    '@committed/tokens',
    '@committed/colors',
  ],
}
// eslint-disable-next-line no-undef
module.exports = nextConfig
