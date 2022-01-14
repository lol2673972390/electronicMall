// 引入 axios
import axios from '@/utils/axios'

// 引入 API
import api from './allRequestApi'

// 请求所有分类

export const getAll = () => {
  return axios({
    method: 'GET',
    url: `${api.TABS_API}`,
  })
}

// 请求主分类下的子分类

export const getOnceGoodsList = id => {
  return axios({
    method: 'GET',
    url: `${api.TAB_API}/${id}`,
  })
}

// 以上写法，等价于
// export { getAll, getOnceGoodsList }
