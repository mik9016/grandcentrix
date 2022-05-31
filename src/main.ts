// import { configureCompat } from '@vue/compat'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import createStore from '../store/index'

// disable compat for certain features
// configureCompat({
//   WATCH_ARRAY: false,
// })
const app = createApp(App)

app.use(router).use(createStore).mount('#app')
