import request from '@/utils/request.ts'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
  })
}
