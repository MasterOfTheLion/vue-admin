import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 初始化样式表
import './styles/index.scss'
// 导入svgIcon
import '@/icons'

const app = createApp(App)
app.use(store).use(router).use(ElementPlus).mount('#app')
