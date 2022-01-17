<template>
    <div class="itemize">
        <van-sidebar v-model="activeKey" router>
            <van-sidebar-item title="" disabled  />
            <van-sidebar-item :title="listItem.name" v-for="(listItem, index) in listTitle" :key="listItem.id" :to="{ name: `Itemize`, params: { id: listItem.id } }" @click="updateItemizeRecord(listItem.id, (index + 1))" />
        </van-sidebar>
        <div tag="div" class="itemContent">
            <van-grid :column-num="2" :border="false" icon-size="64px" :clickable="true">
              <van-grid-item v-for="value in listItem" :key="value.id" :icon="value.imageUrl" :text="value.title" />
            </van-grid>
        </div>
    </div>
</template>
<script>
import { getAll } from '@/api/allRequestFn'
import { getItemizeSonItemize } from '@/api/itemize'

export default {
  data() {
    return {
      activeKey: 1,
      listTitle: null,
      listItem: [],
    }
  },
  created() {
    getAll()
      .then(data => {
        this.listTitle = data.list.slice(1, -1)
      })
    this.activeKey = this.$store.state.itemizeOrder
    getItemizeSonItemize()
      .then(data => {
        console.log(data)
        this.listItem = data.categories
      })
  },
  methods: {
    updateItemizeRecord(id, index) {
      this.$store.commit('updateItemizeRecord', { id, index })
    },
  },
  watch: {
    $route() {
      console.log()
      getItemizeSonItemize(this.$route.params.id)
        .then(data => {
          this.listItem = data.categories
        })
    },
  },
}
</script>
<style lang="less" scoped>
    .itemize{
        display: flex;
        height: 100%;
        .van-sidebar{
            width: 25%;
            text-align: center;
            height: 100%;
            background-color: #f7f8fa;
            overflow-y: auto;
            .van-sidebar-item{
                font-size: 20px;
                padding: 30px 0;
            }
        }
        .itemContent{
            flex: 1;
            height: 100%;
            overflow-y: auto;
            /deep/.van-grid-item__text{
              font-size: 24px;
              font-weight: 600;
            }
        }
    }
</style>
