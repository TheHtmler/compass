const getters = {
    chartData: state => state.dashboardData.chartData,
    screenWidth: state => state.windowScreenWidth.screenWidth,
    token: state => state.userData.token,
    userInfoData: state => state.userData.userInfoData
}

export default getters