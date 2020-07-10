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
  width: 100%;
  height: $header-height;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  box-sizing: border-box;
  background: $color-text;
  .logo {
    height: 72%;
    margin-right: auto;
  }
  .iconfont {
    margin-right: 6rem;
  }
}
</style>