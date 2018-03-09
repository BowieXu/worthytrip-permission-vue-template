import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/test/test1',
    method: 'post',
    data: {}
  })
}
