import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/login',
        name: "Login",
        component: resolve => require(['views/login/Login.vue'], resolve)
    }, {
        path: '/',
        name: 'Home',
        redirect: '/dashboard',
        component: resolve => require(['views/home/Home.vue'], resolve),
        children: [{
            path: '/dashboard',
            name: 'Dashboard',
            meta: {
                menuActive: 'Dashboard',
                routesList: [{
                    routeName: 'Dashboard',
                    routePath: '/dashboard'
                }]
            },
            component: resolve => require(['views/dashboard/DashboardWrapper.vue'], resolve),
            children: [{
                path: '/dashboard',
                name: 'DashboardPanel',
                meta: {
                    menuActive: 'Dashboard',
                    breadCrumbName: 'Dashboard',
                    routesList: [{
                        routeName: 'Dashboard',
                        routePath: '/dashboard'
                    }]
                },
                component: resolve => require(['views/dashboard/dashboardPanel/Dashboard.vue'], resolve)
            }, {
                path: '/dashboard/graph_detail',
                name: 'Detail',
                meta: {
                    menuActive: 'Dashboard',
                    breadCrumbName: 'Dashboard / Detail',
                    routesList: [{
                        routeName: 'Dashboard',
                        routePath: '/dashboard'
                    }, {
                        routeName: 'Detail',
                        routePath: '/dashboard/graph_detail'
                    }]
                },
                component: resolve => require(['views/dashboard/dashboardDetail/Detail.vue'], resolve)
            }]
        }, {
            path: '/visualize',
            name: 'Visualize',
            meta: {
                menuActive: 'Visualize',
                routesList: [{
                    routeName: 'Visualize',
                    routePath: '/visualize'
                }]
            },
            component: resolve => require(['views/visualize/Visualize.vue'], resolve)
        }, {
            path: '/logs',
            name: 'Logs',
            meta: {
                menuActive: 'Logs',
                routesList: [{
                    routeName: 'Logs',
                    routePath: '/logs'
                }]
            },
            component: resolve => require(['views/logs/Logs.vue'], resolve)
        }, {
            path: '/management',
            name: 'Management',
            meta: {
                menuActive: 'Management',
                routesList: [{
                    routeName: 'Management',
                    routePath: '/management'
                }]
            },
            component: resolve => require(['views/management/Management.vue'], resolve)
        }, {
            path: '/users',
            name: 'Users',
            meta: {
                menuActive: 'Users',
                routesList: [{
                    routeName: 'Users',
                    routePath: '/user'
                }]
            },
            component: resolve => require(['views/users/Users.vue'], resolve)
        }]
    }]
})