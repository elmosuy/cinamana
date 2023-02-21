/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  image:{
    loader:"akamai",
    path:"",
  }
}

module.exports = nextConfig
