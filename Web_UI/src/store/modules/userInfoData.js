import SStorage from 'utils/SStorage'
import { loginRequest } from '../../api/login';

const userData = {
    state: {
        userInfoData: SStorage.getItem('userInfoObj') ? SStorage.getItem('userInfoObj') : {},
        token: SStorage.getItem('myToken') ? SStorage.getItem('myToken') : ''
    },
    mutations: {
        SET_USERINFO: (state, newData) => {
            state.userInfoData = newData
        },
        SET_TOKEN: (state, newToken) => {
            state.token = newToken
        }
    },
    actions: {
        getUserInfoData: ({ commit }, newData) => {
            const username = newData.username.trim()
            return new Promise((resolve, reject) => {
                loginRequest(newData).then(res => {
                    const data = res.data.data
                    commit('SET_USERINFO', data)
                    commit('SET_TOKEN', data.token)

                    SStorage.setItem('userInfoObj', data)
                    SStorage.setItem('myToken', data.token)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}

export default userData