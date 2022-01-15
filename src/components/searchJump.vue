<template lang="">
    <router-link to="/search" class="searchJump">
        <div><van-icon name="search"></van-icon>搜索商品，发现更多精品</div>
    </router-link>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
    .searchJump{
        background: #fdde4a;
        width: 100%;
        display: block;
        padding: 20px;
        box-sizing: border-box;
        div{
            background: #fff;
            font-size: 24px;
            padding: 5px 10px;
            color: #877a73;
            border-radius: 10px;
            .van-icon{
                font-size: 32px;
                margin-right: 10px;
                vertical-align: middle;
            }
        }
    }
</style>
