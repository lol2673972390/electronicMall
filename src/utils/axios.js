// 引入 axios
import axios from 'axios'
// 引入 vant 设置懒加载样式
import { Toast } from 'vant'

// development -- 开发环境
// production -- 生产幻想
// 根据开发环境布置不同的请求地址
// 如果是开发环境则使用测试中的url地址，项目上线后再启用真实的url地址
const baseURL = process.env.NODE_ENV === 'development' ? 'http://www.xiongmaoyouxuan.com' : '真实的URL'

// 创建 axios 实例
const service = axios.create({
  // 请求的 URL 地址
  baseURL,
  // 请求延迟
  timeout: 5000,
  withCredentials: true, // 表示跨域时是否需要使用凭证
})

// 添加 axios 请求拦截器
service.interceptors.request(config => {
  // 每次请求后端时，请求头中设置的token
  config.headers.token = 'xxxxxx'

  //   显示提示效果 如懒加载
  Toast.loading({
    message: '加载中',
    duration: 0, // 显示提示框，并且不自动关闭
  })
  // 返回内容
  return config
})

// 添加 axios 响应拦截器
service.interceptors.response(response => {
  // 关闭提示框
  Toast.clear()

  //   判断服务器状态 status
  if (response.status >= 200 && response < 300) {
    // 获取服务端响应返回的数据
    const { code, data } = response.data

    // 判断 code 的值
    if (code === 200) {
      return data
    }
  }

  //   如果请求异常，则调用reject表示失败
  const err = new Error('网络错误，请检查网络连接')
  //   返回结果储存到err对象中
  err.error = response
  //   调用reject
  return Promise.reject(err)
})

// 导出
export default service
