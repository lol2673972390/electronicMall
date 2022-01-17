<template lang="">
   <div id="nav">
     <div class="navBox" ref="navBox">
        <van-tabs background="#fdde4a" router line-height="4px" color="#43240c" class="box" v-model="listOrder">
              <van-tab :title-class="{'first': !index}" v-for="(list, index) in listTitle" :key="list.id" :title="list.name" :to="{name:(index===0 ? `Home` : `HomeTab`), params:( index===0 ? false : {id: list.id} ) }" :ref="`${list}_${index}`">
              </van-tab>
          </van-tabs>
          <van-icon name="bars" to="/mine" @click="showPopup"></van-icon>
    </div>
    <!-- <div class="GongGe" v-show="GongGeNav" ref="GongGeBox">
      <p>全部分类 <van-icon name="cross" @click="closeGongGe" /></p>
      <van-grid :column-num="4" icon-size="38px">
        <van-grid-item v-for="(value, index) in listTitle" :key="value.id" :icon="value.imageUrl" :text="value.name" :to="{path: `/tab`,query:{id:value.id}}" @click="closeGongGe(this,index)" />
      </van-grid>
    </div> -->
    <van-popup v-model="show" position="right" :style="{ height: '100%', width: `30%`}" >
       <van-grid :column-num="1" icon-size="38px">
        <van-grid-item v-for="(value, index) in listTitle" :key="value.id" :icon="value.imageUrl" :text="value.name" :to="{name: `HomeTab`, params:{id:value.id} }" @click="closeGongGe(this,index)" />
      </van-grid>
    </van-popup>
   </div>
</template>
<script>
import { getAll } from '@/api/allRequestFn'

export default {
  created() {
    getAll()
      .then(data => {
        this.listTitle = data.list
      })
  },
  mounted() {
  },
  data() {
    return {
      listTitle: null,
      GongGeNav: false,
      listOrder: 0,
      show: false,
    }
  },
  methods: {
    closeGongGe(eve, order = false) {
      this.show = false
      if (order !== false) {
        this.listOrder = order
      }
    },
    showGongGe() {
      this.GongGeNav = !this.GongGeNav
    },
    showPopup() {
      this.show = true
    },
  },
}
</script>
<style lang="less" scoped>
    .navBox{
        display: flex;
        flex-direction: row;
        height: 50px;
        width: 100%;
        background: #fdde4a;
        line-height: 50px;
        box-sizing: border-box;
        position: relative;
        .van-tabs{
            flex: 2;
            width: 170px;
        }
        i{
            display: block;
            text-align: center;
            padding: 0 15px;
        }
        i.van-icon.van-icon-bars::before{
            line-height: 50px;
            font-size: 42px;
        }
        /deep/.van-tab{
            transition: all .2s;
        }
    }
    #nav{
      position: relative;
      .GongGe{
        background: #fff;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        // display: none;
        p{
          background: #fdde4a;
          margin: 0;
          text-align: center;
          padding: 16px 0;
          position: relative;
          i{
            position: absolute;
            top: 20px;
            right: 20px;
          }
        }
      }
    }
</style>
