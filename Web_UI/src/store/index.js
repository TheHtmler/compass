import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import dashboardData from './modules/dashboardData'
import windowScreenWidth from './modules/windowScreenWidth'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        dashboardData,
        windowScreenWidth
    },
    getters
})

export default store