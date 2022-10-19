import "bootstrap/dist/css/bootstrap.min.css";
import Vue from 'vue'
import App from './App.vue'
import VueProgressBar from 'vue-progressbar'
import axios from 'axios'

Vue.config.productionTip = false

const options = {
  color: 'blue',
  failedColor: 'red',
  height: '90px'
}
Vue.use(VueProgressBar,options)
Vue.prototype.$http = axios;
new Vue({
  render: h => h(App),
}).$mount('#app')
