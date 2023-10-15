const rewrites = () => {
  return [
    {
      source: '/auth-api/:slug*',
      destination: 'http://localhost:4000/:slug*'
    }
  ]
}
module.exports = {
    webpack: (config) => {
      config.watchOptions.poll = 300;
      return config;
    },
    rewrites
  };