import request from '@/utils/request.ts'

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout(...args) {
  return request({
    url: '/user/logout',
    method: 'get',
  })
}
