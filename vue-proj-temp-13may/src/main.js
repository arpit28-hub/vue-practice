// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@mdi/font/css/materialdesignicons.css'
import { vuetify } from './plugins/vuetify.js'
// import vuetify from 'vue-setup\src\plugins\vuetify.js'
import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.mount('#app')
