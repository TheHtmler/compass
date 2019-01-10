import axios from 'axios'
import router from 'vue-router'

const service = axios.create({})

service.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

service.interceptors.response.use(
    response => {
        return response
    },
    err => {
        if (err.response) {
            switch (err.response.status) {
                case 401:
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath }
                    })
            }
        }
        return Promise.reject(err)
    }
)

export default service