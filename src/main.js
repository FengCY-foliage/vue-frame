import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons'
import VueCookies from 'vue-cookies'

const app = createApp(App)
app.use(ElementPlus)
app.use(VueCookies)
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})
app.use(router).mount('#app')