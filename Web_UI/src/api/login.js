import request from 'utils/https'

export const loginRequest = (formData) => {
    return request({
        method: 'post',
        url: 'api/login',
        data: formData,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const logoutRequest = (token) => {
    return request({
        method: 'post',
        url: 'api/logout',
        data: {},
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
}