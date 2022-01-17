// 引入 axios
import axios from '@/utils/axios'

// 引入 API
import api from './allRequestApi'

// 请求商品详情

export const getItemizeSonItemize = (id) => {
  return axios({
    method: 'GET',
    url: `${api.DETAIL_CONTENT}`,
    params: {
      id,
    },
  })
}
