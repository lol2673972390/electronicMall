<template>
  <div id="app">
    <div id="main">
      <router-view name="searchJump"></router-view>
      <router-view name="tabScroll"></router-view>
      <router-view/>
    </div>
    <router-view name="tabbar" />
    <router-view name="goodsAction" />
  </div>
</template>

<style lang="less" scoped>
  #main{
    position: absolute;
    top: 0;
    bottom: 80px;
    overflow-y: auto;
    width: 100%;
  }
</style>
