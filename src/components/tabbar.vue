<template lang="">
    <ul>
        <router-link v-for="tab in tabs" :key="tab.path" tag="li" :to="(tab.name === 'Itemize' ? { name: tab.name , params: { id: $store.state.itemizeRecord } } : tab.path)"><van-icon :name="tab.meta.icon"></van-icon>{{ tab.meta.title }}</router-link>
    </ul>
</template>
<script>

import routes from '@/router/routes.js'

export default {
  computed: {
    tabs() {
      return routes.filter(val => val.meta && val.meta.tabbars)
    },
  },
}
</script>
<style lang="less" scoped>
    ul{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 80px;
        display: flex;
        li {
            background: #fff;
            flex: 1;
            text-align: center;
            font-size: 24px;
            padding: 5px 0 0 0;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            i{
                display: block;
            }
            .van-icon{
                font-size: 32px;
            }
        }
    }
    .router-link-exact-active{
        color: #1999A6;
    }
</style>
