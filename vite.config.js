import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  resolve: {
    alias: {
      S: '/src',
    },
  },
  base: './',
  server: { port: 1800 },
  // vlevin @ 2021-04-15 Vite的proxy似乎暂时不好用
  plugins: [
    vue(),
    WindiCSS(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          ensureStyleFile: true,
          resolveStyle: (name) => {
            if (name === 'locale') return ''
            return `element-plus/lib/theme-chalk/${name}.css`
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`
          },
        },
      ],
    }),
  ],
})
