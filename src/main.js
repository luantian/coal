import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import * as echarts from 'echarts'// 引入echarts

import 'normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/display.css';


Vue.config.productionTip = false
Vue.prototype.$echarts = echarts// 引入echarts

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
