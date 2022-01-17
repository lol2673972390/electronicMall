<template>
    <div class="goodsAction">
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="cart-o" text="购物车" />
            <van-goods-action-icon icon="star-o" text="收藏" />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
    .goodsAction{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 80px;
        .van-goods-action{
            height: 80px;
            .van-goods-action-icon{
                font-size: 18px;
            }
            /deep/.van-goods-action-icon__icon{
                font-size: 28px;
            }
            .van-goods-action-button{
                height: calc(100% - 20px);
            }
        }
    }
</style>
