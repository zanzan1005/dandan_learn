import axios from 'axios'
import router from '@/router'
import Cookie from 'js-cookie'

const instance = axios.create({
  timeout: 60000,
  // baseURL: 'https://www.easy-mock.com/mock/5cbf00d8330edc5317b8164b/haha/'
})
const COOKIE_NAME = 'movie_trailer_user'

instance.interceptors.response.use(res => {
  const { data } = res
  // 登录失效
  if (data.code === 1003) {
    Cookie.remove(COOKIE_NAME)
    router.replace('/login')
    return
  }
  return Promise.resolve(data)
}, () => {
  router.push('/error')
})

export default {
  install: (Vue, option) => {
    Object.defineProperty(Vue.prototype, '$axios', { value: instance })
  }
}