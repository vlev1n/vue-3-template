import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.js'
import { store } from './store.js'
import { fetchData } from 'S/utils/request.js'
import { eventHub } from 'S/utils/eventHub.js'

// vlevin @ 2021-07-05 ElementPlus
import { ElMessage } from 'element-plus'

// vlevin @ 2021-04-15 样式
import 'element-plus/lib/theme-chalk/index.css'
import 'virtual:windi.css'
import './directives.css'

// vlevin @ 2021-07-05 创建应用、全局变量
const app = createApp(App).use(router).use(store).use(ElMessage)
app.config.globalProperties.$fetchData = fetchData
app.config.globalProperties.$eventHub = eventHub
app.mount('#app')
