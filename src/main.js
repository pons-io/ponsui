import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Skeleton from '@brayamvalero/vue3-skeleton'

import App from './App.vue'
import router from './router'

import '@brayamvalero/vue3-skeleton/dist/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Skeleton)

app.mount('#app')
