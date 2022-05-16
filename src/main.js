import { createApp } from 'vue'
import App from './App.vue'
import router from './src/router'

console.log(cwd)

createApp(App).use(router).mount('#app')
