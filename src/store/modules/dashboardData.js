import SStorage from 'utils/SStorage'

const dashboardData = {
    state: {
        chartData: SStorage.getItem('detailData') ? SStorage.getItem('detailData') : {}
    },
    mutations: {
        SET_DATA: (state, newData) => {
            state.chartData = newData
        }
    },
    actions: {
        DeliverData: ({ commit }, newData) => {
            commit('SET_DATA', newData)
        }
    }
}

export default dashboardData