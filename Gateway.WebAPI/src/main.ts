import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import 'vant/lib/index.css'

import { Button } from 'vant';

createApp(App).use(Button).mount('#app')
