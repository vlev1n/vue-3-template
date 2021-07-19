import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.js'
import { store } from './store.js'
import { fetchData } from 'S/utils/request.js'
import { eventHub } from 'S/utils/eventHub.js'

// vlevin @ 2021-07-05 ElementPlus
import { locale, ElMessage } from 'element-plus'
// vlevin @ 2021-04-15 ElementPlus汉化
import lang from 'element-plus/lib/locale/lang/zh-cn'
// vlevin @ 2021-04-26 ---以下内容勿动（开始）---
// vlevin @ 2021-04-26 原因：vite或element-plus存在bug，locale在开发模式下是个函数，打包之后是个对象，导致打包后的代码无法执行
// vlevin @ 2021-04-26 此处主动判断环境并手动修复，如果日后官方修复了bug，可直接使用locale(lang)
import { isLocal } from './utils/url.js'
const localize = isLocal() ? locale : locale.use
localize(lang)
// vlevin @ 2021-04-26 ---以上内容勿动（结束）---

// vlevin @ 2021-04-15 样式
import 'element-plus/lib/theme-chalk/index.css'
import 'virtual:windi.css'
import './directives.css'

// vlevin @ 2021-07-05 创建应用、全局变量
const app = createApp(App).use(router).use(store).use(ElMessage)
app.config.globalProperties.$fetchData = fetchData
app.config.globalProperties.$eventHub = eventHub
app.mount('#app')
