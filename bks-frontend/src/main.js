import { createApp } from 'vue'

import App from './App.vue'
import router from "@/router";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as AntdIcon from '@ant-design/icons-vue'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'


const app = createApp(App)
for (const [key, component] of Object.entries(AntdIcon)) {
    app.component(key, component)
}

app.use(router)
    .use(Antd)
// app.use(ElementUI)
app.mount('#app')
