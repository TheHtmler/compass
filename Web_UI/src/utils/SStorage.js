const SStorage = window.sessionStorage

export default {
    getItem(key) {
        try {
            return JSON.parse(SStorage.getItem(key))
        } catch (error) {
            return null
        }
    },
    setItem(key, value) {
        SStorage.setItem(key, JSON.stringify(value))
    },
    clear() {
        SStorage.clear()
    },
    removeItem(key) {
        SStorage.removeItem(key)
    }
}