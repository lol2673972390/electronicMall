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
  </div>
</template>

<script>
// @ is an alias to /src

import { getHomePageBannerImg, getHomePageAllData } from '@/api/home'

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
        console.log(data)
        this.GongGes = data.grids
      })
  },
}
</script>

<style lang="less" scoped>
  .van-swipe{
    width: 100%;
    img {
      width: 100%;
      height: 210px;
    }
  }
</style>
