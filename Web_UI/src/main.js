// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import store from './store'
import axios from 'axios'
import echarts from 'echarts'
import 'iview/dist/styles/iview.css'
import 'normalize.css'
import 'assets/less/index.less'
import { callbackify } from 'util';

Vue.config.productionTip = false
Vue.use(iView)

/* default baseURL */
// axios.defaults.baseURL = '//140.143.232.62/'
axios.defaults.baseURL = location.hostname == 'localhost' ? '//localhost:5000/' : '//140.143.232.62/'

/* Vue prototype config */
// Vue.prototype.$API = API
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts

// Define global click events
Vue.prototype.globalClick = (callBack) => {
    document.getElementById('app').onclick = () => {
        callBack()
    }
}

router.beforeEach((to, from, next) => {
    if (store.state.userData.token && store.state.userData.token !== '') {
        next()
    } else {
        console.log('no token')
        if (to.path == '/login') {
            next()
        } else {
            next({
                path: '/login'
            })
        }

    }
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})