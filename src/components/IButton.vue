<template>
  <button
    :class="[
      type ? `i-button--${type}` : '',
      {
        'is-round': round
      }
    ]"
    class="i-button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "IButton",
  props: {
    // 圆角
    round: Boolean,
    // 按钮类型  info
    type: String
  }
}
</script>

<style lang="scss" scoped>
.i-button {
  padding: 1.3rem 4rem;
  &--#{info} {
    color: #655e5e;
    background: #fff;
  }
  &.is-round {
    border-radius: 10rem;
  }
}
</style>
