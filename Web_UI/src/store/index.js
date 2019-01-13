import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import dashboardData from './modules/dashboardData'
import windowScreenWidth from './modules/windowScreenWidth'
import userData from './modules/userInfoData'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        dashboardData,
        windowScreenWidth,
        userData
    },
    getters
})

export default store