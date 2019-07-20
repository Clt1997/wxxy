import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import 'amfe-flexible'

//导入cube
import Cube from 'cube-ui'

//路由
import router from './router/index'


Vue.use(Cube)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

