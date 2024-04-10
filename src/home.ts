import { createApp } from 'vue'
import Home from './Home.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'

const app=createApp(Home)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router)
app.mount('#home')