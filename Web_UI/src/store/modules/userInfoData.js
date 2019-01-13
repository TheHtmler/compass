import SStorage from 'utils/SStorage'

const userData = {
  state: {
    userInfoData: SStorage.getItem('userInfoObj')? SStorage.getItem('userInfoObj'):{}
  },
  mutations: {
    SET_USERINFO: (state, newData) => {
      state.userInfoData = newData
    }
  },
  actions: {
    getUserInfoData: ({ commit }, newData) => {
      commit('SET_USERINFO', newData)
    }
  }
}

export default userData