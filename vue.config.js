module.exports = {
  devServer: {
    open: true
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/_var.scss";`
      }
    }
  }
}
