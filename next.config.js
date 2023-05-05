/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactStrictMode: true,
  swcMinify: true,
  image:{
    loader:"akamai",
    path:"",
  },
  images:{
    domains:['www.q-film.tv','e.qfilm.tv'],
    allowFutureImage: true

  },
  trailingSlash: true

}


module.exports = nextConfig
