import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
// 引入 二次封装的 axios
import axios from './utils/axios'

Vue.config.productionTip = false
// 往 VUE 的原型对象中添加 axios
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
