// TODO: usar pinia en lugar de vuex

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

import '@/assets/mdi/scss/materialdesignicons.scss'
import '@/css/bootstrap-grid.min.css'
import '@/css/theme.scss'
import '@/css/global.scss'

// createApp(App).use(store).use(router).mount('#app')

createApp(App).use(router).mount('#app')
