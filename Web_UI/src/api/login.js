import request from 'utils/https'
import SStorage from 'utils/SStorage'

const token = SStorage.getItem('userInfoData').token

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

export const logoutRequest = () => {
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