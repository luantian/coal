import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import * as echarts from 'echarts'// 引入echarts
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '3UETvby4ggw9gSP1hHd5UvMkdAiWGBV8'
})

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts// 引入echarts
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
