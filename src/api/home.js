// 引入 axios
import axios from '@/utils/axios'

// 引入 API
import api from './allRequestApi'

// 请求首页轮播
export const getHomePageBannerImg = () => {
  return axios({
    method: 'GET',
    url: `${api.HOME_BANNER}`,
    headers: {
      'x-platform': 'pc',
    },
  })
}

export const getHomePageAllData = () => {
  return axios({
    method: 'GET',
    url: `${api.HOME_BANNER}?start=0`,
  })
}

export const getHomePageBaoKuanList = (start = 0) => {
  return axios({
    method: 'GET',
    url: `${api.HOME_BAOKUAN}`,
    params: { start },
  })
}
