<template>
  <div>
    <i-header></i-header>
    <!-- banner轮播图 -->
    <div class="swiper-container banner-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          :style="`--url: url(${require('@/assets/imgs/swiper1.jpg')})`"
        ></div>
        <div
          class="swiper-slide"
          :style="`--url: url(${require('@/assets/imgs/swiper2.jpg')})`"
        ></div>
        <div
          class="swiper-slide"
          :style="`--url: url(${require('@/assets/imgs/swiper3.jpg')})`"
        ></div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev iconfont icon-left"></div>
      <div class="swiper-button-next iconfont icon-right"></div>
    </div>
    <!-- card 导航 -->
    <div class="swiper-container card-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :style="`--url: url(${require('@/assets/imgs/card1.png')})`"></div>
        <div class="swiper-slide" :style="`--url: url(${require('@/assets/imgs/card2.png')})`"></div>
        <div class="swiper-slide" :style="`--url: url(${require('@/assets/imgs/card3.png')})`"></div>
        <div class="swiper-slide" :style="`--url: url(${require('@/assets/imgs/card4.png')})`"></div>
      </div>
    </div>
    <!-- 选项卡 -->
    <ul class="tabs">
      <li class="tab">推荐</li>
      <li class="tab">最热</li>
      <li class="tab">应用推荐</li>
      <li class="tab">生活方式</li>
      <li class="tab">效率技巧</li>
      <li class="tab">播客</li>
    </ul>
  </div>
</template>

<script>
import IHeader from "@/components/IHeader"
import Swiper from "swiper"

export default {
  components: { IHeader },
  created() {},
  mounted() {
    this.initBannerSwiper()
    this.initCardSwiper()
  },
  methods: {
    /**
     * 初始化banner轮播图组件
     */
    initBannerSwiper() {
      return new Swiper(".banner-container", {
        direction: "horizontal",
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: {
          delay: 5000
        }
      })
    },
    /**
     * 初始化card轮播图组件
     */
    initCardSwiper() {
      return new Swiper(".card-container", {
        direction: "horizontal",
        slidesPerView: 2,
        spaceBetween: 20,
        autoHeight: true,
        pagination: {
          el: ".swiper-pagination"
        },
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-container {
  --swiper-pagination-color: #fd281a;
  height: 45rem;
  .swiper-slide {
    background: var(--url) no-repeat;
    background-size: cover;
  }
  .swiper-button-next,
  .swiper-button-prev {
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    text-align: center;
    background: #f4f4f4;
    &::after {
      display: none;
    }
    &.iconfont {
      color: #655e5e;
    }
  }
}
.card-container {
  .swiper-wrapper {
    display: flex;
    align-items: center;
  }
  .swiper-slide {
    margin: 0 3rem;
    height: 20rem;
    background: var(--url) no-repeat center center/cover;
    border-radius: 2rem;
  }
}
</style>
