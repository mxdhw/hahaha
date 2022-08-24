import request from '@/utils/request'

export const registerAPI = () => {
  return request({
    url: 'api/reg',
    method: 'POST',
    data: {
      username: 'asdasd',
      password: '1111111',
      repassword: '1111111'
    }
  })
}
