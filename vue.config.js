const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa:{
    themeColor: '#E60076',//'var(--bs-primary)',
    msTileColor: '#E60076',//'var(--bs-primary)',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
  }
})
