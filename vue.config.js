const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    configureWebpack: {        
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'            
      },
      allowedHosts: 'all',
      proxy: {
        '/api': {
          target: 'https://bromine.vercel.app/api/',
          pathRewrite: { '^/api/': '' }
        }
      },
    }
  },
})
