import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'

// 引入echarts
import * as echarts from 'echarts';

// 全局样式
import '@/styles/var.less'
import '@/styles/mixin.less'
import '@/styles/global.less'

const app = createApp(App)
// 全局组件
app.provide('$echarts', echarts)

// 全局方法

// 全局组件



app
  .use(createPinia()) // 启用 Pinia
  .use(router)
  .mount('#app')
