<template>
  <div class="home">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in (bannerImg.length ? bannerImg : images)" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="GongGes.length" :border="false" icon-size="34px" :clickable="true">
      <van-grid-item v-for="GongGe in GongGes" :key="GongGe.id" :icon="GongGe.imageUrl" :text="GongGe.title">
      </van-grid-item>
    </van-grid>
    <div class="seckill">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-card
        v-for="item in list"
        :key="item.id"
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        :thumb="item.image"
        @click="detailsJump(item.id)"
      >
        <template #thumb>
          <van-image
            width="100"
            height="100"
            :src="item.image"
          />
        </template>
        <template #title>
          <div class="van-ellipsis" style="font-size:16px">
            {{ item.title }}
          </div>
        </template>
        <template #desc>
          <div class="rankingTag">
            {{ item.rankingTag }}
          </div>
        </template>
        <template #tags>
          <div class="priceText">
            券后￥<span class="newPrice">{{ item.price }}</span> <span class="originPrice"> ￥{{ item.originPrice }}</span>
          </div>
        </template>
        <template #price>
          <van-tag v-show="item.couponValue" round  plain type="danger" class="discount">{{ item.couponValue }}</van-tag>
        </template>
        <template #num>
          <div>
            月销{{ item.saleNum | saleNumText }}
          </div>
        </template>
      </van-card>
    </van-list>
  </div>
</template>

<script>
// @ is an alias to /src

import { getHomePageBannerImg, getHomePageAllData, getHomePageBaoKuanList } from '@/api/home'

export default {
  name: 'Home',
  data() {
    return {
      bannerImg: [],
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
      GongGes: [],
      list: [],
      loading: false,
      finished: false,
      nextIndex: 0,
      total: 0,
      lastTime: 0,
    }
  },
  created() {
    getHomePageBannerImg()
      .then(data => {
        data.banners.forEach(val => {
          this.bannerImg.push(val.imageUrl)
        })
      })
    getHomePageAllData()
      .then(data => {
        this.GongGes = data.grids
      })
    getHomePageBaoKuanList()
      .then(data => {
        this.list.push(...data.list)
        this.nextIndex = data.nextIndex
        this.total = data.total
      })
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        getHomePageBaoKuanList(this.nextIndex)
          .then(data => {
            this.list.push(...data.list)
            this.nextIndex = data.nextIndex
          })

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.nextIndex >= this.total) {
          this.finished = true
        }
      }, 1000)
    },
    detailsJump(id) {
      this.$router.push({ name: 'Details', params: { id } })
    },
  },
  filters: {
    saleNumText(saleNum) {
      return saleNum > 10000 ? (`${(saleNum / 10000).toFixed(1)}万`) : saleNum
    },
  },
  mounted() {
  },
}
</script>

<style lang="less" scoped>
  .home{
    background: #f5f5f5;
  }
  .van-swipe{
    width: 100%;
    img {
      width: 100%;
      height: 210px;
    }
  }
  .rankingTag{
    position: relative;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 3px 7px;
    margin-top: 10px;
    margin-bottom: 11px;
    background: linear-gradient(92deg,#ff5201,#fa8c16);
    border-radius: 15px;
    font-size: 16px;
    color: #fff;
  }
  .seckill{
    width: 100%;
    padding: 30px 20px;
    box-sizing: border-box;
    .top{
      height: 130px;
      background: url(//img6.lukou.com/static/img/seckill-title.ae0d6a5.png) no-repeat;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    .bottom{
      width: 100%;
      min-height: 245px;
      background: url(../../assets/seckillBottom.png) no-repeat;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      margin-top: -60px;
    }
  }
  .van-list{
    background: url(//img6.lukou.com/static/img/baokuan-title.df225a5.png) no-repeat;
    width: calc(100% - 40px);
    margin: 0 auto;
    background-size: 100% auto;
    background-repeat: no-repeat;
    padding-top: 60px;
    .van-card{
      background: #fff;
      box-sizing: border-box;
      margin-top: 0;
      padding: 25px 15px;
    }
    .van-card:first-child{
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
    .van-card__thumb{
      width: auto;
      height: auto;
    }
    .priceText{
      font-size: 18px;
      color: #f40008;
    }
    .newPrice{
      font-weight: 600;
      font-size: 34px;
    }
    .originPrice{
      font-weight: 400;
      text-decoration: line-through;
      color: #b1a9a5;
      margin-left: .08rem;
    }
    .discount{
      padding: 5px 7px;
    }
  }

</style>
