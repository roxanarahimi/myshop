const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa:{
    themeColor: 'var(--bs-primary)',
    msTileColor: 'var(--bs-primary)',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
  }
})
