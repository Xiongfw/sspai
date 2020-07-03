<template>
  <div class="header">
    <img class="logo" src="@/assets/imgs/logo.png">
    <i class="iconfont icon-search"></i>
    <i class="iconfont icon-menu"></i>
    <i-button round type="info">登录</i-button>
  </div>
</template>

<script>
export default {
  name: "IHeader"
}
</script>

<style lang="scss" scoped>
.header {
  background: $color-text;
  display: flex;
  align-items: center;
  height: 13.4rem;
  padding: 0 3rem;
  .logo {
    height: 72%;
    margin-right: auto;
  }
  .iconfont {
    margin-right: 6rem;
  }
}
</style>