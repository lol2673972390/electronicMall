<template>
    <div class="details">
        <van-nav-bar
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        :placeholder="true"
        />
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
import { getItemizeSonItemize } from '@/api/detail'

export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      console.log(1)
    },
  },
  data() {
    return {
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
    }
  },
  created() {
    getItemizeSonItemize(this.$route.params.id)
      .then(data => {
        console.log(data.detail)
        this.images = []
        data.detail.photo.forEach(val => {
          this.images.push(val.url)
        })
      })
  },
}
</script>
<style lang="less" scoped>
    .details{
        height: 100%;
        overflow-y: auto;
        /deep/.van-nav-bar{
            border: 0;
            width: 100%;
            position: fixed;
            box-sizing: border-box;
            padding: 20px 15px;
            background: transparent;
            .van-nav-bar__arrow{
                font-size: 36px;
                background-color: rgba(0,0,0,.5);
                border-radius: 50%;
                text-align: center;
                width: 60px;
                height: 60px;
                line-height: 60px;
                color: #fff;
            }
        }
        .van-swipe{
            width: 100%;
            img{
                width: 100%;
            }
        }
    }
</style>
