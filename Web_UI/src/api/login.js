import request from 'utils/https'

export const loginRequest = (data) => {
    return request({
        method: 'post',
        data: data,
        url: 'api/login',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const logoutRequest = (token) => {
    return request({
        method: 'post',
        url: 'api/v1/auth/logout',
        data: {},
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
}