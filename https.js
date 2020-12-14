/**
 * Created by superman on 17/2/16.
 * http配置
 */

import axios from 'axios'
import store from './store'
import authServicer from './serves/auth.services'
import { CONFIG } from './rconfig'
// import router from './router'

// axios 配置
axios.defaults.timeout = 8084
axios.defaults.baseURL = 'http://localhost'
let isTokenExpired = false
// http request 拦截器
axios.interceptors.request.use(
  config => {
    console.log('isTokenExpired1', isTokenExpired)

    console.log('222222222222222222', (!(store.state.login.token === null)) && isTokenExpired === false)
    if ((!(store.state.login.token === null)) && isTokenExpired === false) {
      isTokenExpired = true
      console.log('isTokenExpired', isTokenExpired)
      // 判断token是否需要刷新
      let _stoken = store.state.login.token
      let chicktokentime = authServicer.chicktokenTime(_stoken)
      // let chicktokentime = 3
      if (chicktokentime >= 12) {
        isTokenExpired = false
        console.log('已经登录')
      } else if (chicktokentime < 12 && chicktokentime > 0) {
        console.log('进入刷新token的方法里面吗')
        // 就刷新token
        // :TODO
      } else {
        console.log('没登录')
        isTokenExpired = false
        // confirm.log('没登录')
      }
      // }
    } else {
      // TODO: 错误处理
      console.log('error1234')
    }
    // 判断所发的请求是否要加token
    if (

      config.url === CONFIG.refreshtoken ||
      config.url === CONFIG.uppersoninfo ||
      config.url === CONFIG.putwenzhang
    ) {
      config.headers.Token = store.state.login.token
    } else {
      console.log('不需要加token')
    }
    console.log(config)
    return config
  },
  err => {
    console.log('err', err)
    // return Promise.reject(err)
  }
)

// // http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log('authervice error2  2', error['Error'])
    if (error.response) {
      switch (error.response.status) {
        case 500:
          // 401 清除token信息并跳转到登录页面
          // store.commit(types.LOGOUT)
          console.log('htt______________________p', error.response)
          if (error.response.data.message === 'token认证失败！') {
            console.log('token认证失败！')
            authServicer.logoutokenState()
            // window.location.reload()
          }

          // 身份过期，要求用户从新登录
          // 只有在当前路由不是登录页面才跳转
          // router.currentRoute.path !== 'login' &&
          //   router.replace({
          //     path: 'login',
          //     query: { redirect: router.currentRoute.path }
          //   })
      }
    }
    return Promise.reject(error.response.data)
  }
)

export default axios
