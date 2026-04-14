module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://cloudtools-api.493024082.workers.dev/api/:path*'
      }
    ]
  }
};
