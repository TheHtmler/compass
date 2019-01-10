const windowScreenWidth = {
    state: {
        screenWidth: document.body.clientWidth
    },
    mutations: {
        getScreenWidth(state, screenWidth) {
            state.screenWidth = screenWidth
        }
    }
}

export default windowScreenWidth