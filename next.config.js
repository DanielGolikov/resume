/** @type {import('next').NextConfig} */
module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_KEY: process.env.API_KEY,
    S3URL: process.env.S3URL,
  },
}
