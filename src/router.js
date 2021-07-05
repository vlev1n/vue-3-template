import { createRouter, createWebHashHistory } from 'vue-router'
// vlevin @ 2021-05-08 如果使用形如component: () => import('S/pages/Home.vue')的异步加载方式，每个引入都会被打包成独立文件，部分浏览器会出现404错误
import Home from 'S/pages/Home.vue'
const routes = [
  {
    path: '/',
    component: Home,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export { router }
