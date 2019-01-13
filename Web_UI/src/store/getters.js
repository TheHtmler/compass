const getters = {
    chartData: state => state.dashboardData.chartData,
    screenWidth: state => state.windowScreenWidth.screenWidth,
    userInfoData: state => state.userData.userInfoData
}

export default getters