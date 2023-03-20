import { createApp } from 'vue'
import App from './App.vue'

import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import frontboard from './package/index.js'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(frontboard.install);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app');
