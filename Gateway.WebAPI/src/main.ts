import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import 'vant/lib/index.css'


createApp(App).use(router).mount('#app')
