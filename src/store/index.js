import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 分类默认打开
    itemizeRecord: 2,
    // 选择下标
    itemizeOrder: 1,
  },
  mutations: {
    updateItemizeRecord(state, { id, index } = {}) {
      state.itemizeRecord = id
      state.itemizeOrder = index
    },
  },
  actions: {
  },
  modules: {
  },
})
