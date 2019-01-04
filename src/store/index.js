import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import windowScreenWidth from './modules/windowScreenWidth'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        windowScreenWidth
    },
    getters
})

export default store