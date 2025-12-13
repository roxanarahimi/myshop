import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
const pinia = createPinia()
import './registerServiceWorker'
import router from './router'
window.axios = require('axios')

createApp(App).use(router).use(pinia).mount('#app')

