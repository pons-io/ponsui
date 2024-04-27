import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Skeleton from '@brayamvalero/vue3-skeleton'
import { SnackbarService } from 'vue3-snackbar'

import App from './App.vue'
import router from './router'

import '@brayamvalero/vue3-skeleton/dist/style.css'
import 'vue3-snackbar/styles'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Skeleton)
app.use(SnackbarService)

app.mount('#app')
