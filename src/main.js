import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import * as echarts from 'echarts'// 引入echarts

import 'normalize.css'

import ElementUI from 'element-ui'
import './style/element-variables.scss'

import '@/assets/font/DINfont.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts// 引入echarts

Vue.use(ElementUI, { size: 'small' });

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
