import request from 'utils/https'

export const getUsers = (token) => {
  return request({
    method: 'GET',
    url: 'api/users',
    headers:{
      "Content-type": "application/json",
      "Authorization": token
    }
  })
}