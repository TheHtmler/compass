import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        redirect: '/dashboard',
        component: resolve => require(['views/home/Home.vue'], resolve),
        children: [{
            path: '/dashboard',
            name: 'Dashboard',
            meta: {
                breadCrumbName: 'Dashboard'
            },
            component: resolve => require(['views/dashboard/Dashboard.vue'], resolve)
        }, {
            path: '/visualize',
            name: 'Visualize',
            meta: {
                breadCrumbName: 'Visualize'
            },
            component: resolve => require(['views/visualize/Visualize.vue'], resolve)
        }, {
            path: '/logs',
            name: 'Logs',
            meta: {
                breadCrumbName: 'Logs'
            },
            component: resolve => require(['views/logs/Logs.vue'], resolve)
        }, {
            path: '/management',
            name: 'Management',
            meta: {
                breadCrumbName: 'Management'
            },
            component: resolve => require(['views/management/Management.vue'], resolve)
        }]
    }]
})