<template>
  <div id="app" :style="appStyle">
    <i-header ref="header" id="header"></i-header>
    <router-view />
  </div>
</template>

<script>
import IHeader from "@/components/IHeader"

export default {
  name: "App",
  components: { IHeader },
  mounted() {
    this.headerHeight = this.$refs.header.$el.offsetHeight
  },
  data() {
    return {
      headerHeight: 0
    }
  },
  computed: {
    appStyle() {
      return {
        "padding-top": this.headerHeight + 'px'
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100%;
  overflow-x: hidden;
  position: relative;
  box-sizing: border-box;
  background: #f4f4f4;
}
</style>
