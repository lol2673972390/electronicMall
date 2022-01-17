// 引入 axios
import axios from '@/utils/axios'

// 引入 API
import api from './allRequestApi'

// 请求对应分类的子分类

export const getItemizeSonItemize = (id = 2) => {
  return axios({
    method: 'GET',
    url: `${api.ITEM_CONTENT}${id}`,
  })
}
