/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: { esmExternals: "loose" },
  transpilePackages: [
    '@committed/ds',
    '@committed/ds-tokens',
    '@committed/ds-colors',
  ],
}
// eslint-disable-next-line no-undef
module.exports = nextConfig
