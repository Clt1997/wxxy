import Vue from 'vue'
import VueRouter from 'vue-router'

//导入文件
import Home from '../page/Home/index.vue'
import CateList from '../page/CateList/index.vue'
import Topic from '../page/Topic/index.vue'
import Cart from '../page/Cart/index.vue'
import UseCenter from '../page/UseCenter/index.vue'

//声明使用
Vue.use(VueRouter)

export default new VueRouter({
    //配置路径
    routes:[
        {
            path: '/',
            redirect: '/home'
        },            
        {
            path:'/home',
            component: Home
        },
        {
            path:'/catelist',
            component: CateList
        },
        {
            path:'/topic',
            component: Topic
        },
        {
            path:'/cart',
            component: Cart
        },
        {
            path:'/usecenter',
            component: UseCenter
        }
    ]
})

