<template>
  <div class="home-page">
    <i-header></i-header>
    <div class="main">
      <!-- banner轮播图 -->
      <div class="swiper-container banner-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :style="`--url: url(${require('@/assets/imgs/swiper1.jpg')})`" ></div>
          <div class="swiper-slide" :style="`--url: url(${require('@/assets/imgs/swiper2.jpg')})`" ></div>
          <div class="swiper-slide" :style="`--url: url(${require('@/assets/imgs/swiper3.jpg')})`" ></div>
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
      <div class="swiper-container tab-container">
        <ul class="swiper-wrapper">
          <li :class="['swiper-slide', {'is-active': tabIndex == 1}]" @click="tabIndex = 1">推荐</li>
          <li :class="['swiper-slide', {'is-active': tabIndex == 2}]" @click="tabIndex = 2">最热</li>
          <li :class="['swiper-slide', {'is-active': tabIndex == 3}]" @click="tabIndex = 3">应用推荐</li>
          <li :class="['swiper-slide', {'is-active': tabIndex == 4}]" @click="tabIndex = 4">生活方式</li>
          <li :class="['swiper-slide', {'is-active': tabIndex == 5}]" @click="tabIndex = 5">效率技巧</li>
          <li :class="['swiper-slide', {'is-active': tabIndex == 6}]" @click="tabIndex = 6">播客</li>
        </ul>
      </div>
      <div class="tab-content">
        <div v-for="i in 100">{{i}}</div>
      </div>
      <i-footer></i-footer>
    </div>
  </div>
</template>

<script>
import IHeader from "@/components/IHeader"
import IFooter from "@/components/IFooter"
import Swiper from "swiper"

export default {
  components: { IHeader, IFooter },
  created() {},
  mounted() {
    this.initBannerSwiper()
    this.initCardSwiper()
    this.initTabSwiper()
  },
  data() {
    return {
      // 当前选项卡
      tabIndex: 1
    }
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
          el: ".banner-container .swiper-pagination"
        },
        navigation: {
          nextEl: ".banner-container .swiper-button-next",
          prevEl: ".banner-container .swiper-button-prev"
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
        slidesPerView: "auto",
        autoHeight: true
      })
    },
    /**
     * 初始化选项卡
     */
    initTabSwiper() {
      return new Swiper(".tab-container", {
        direction: "horizontal",
        slidesPerView: "auto",
        autoHeight: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .main {
    flex: 1;
    overflow: auto;
  }
}
// banner轮播图
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
// card
.card-container {
  padding: 3rem 0rem;
  .swiper-slide {
    width: calc(100% / 2 - 3rem * 2);
    height: 22rem;
    background: var(--url) no-repeat center center/100%;
    border-radius: 2rem;
    transition: background-size 0.3s;
    box-shadow: 0 0.8rem 0.8rem 0 rgba(0, 0, 0, 0.15);
    margin: 0 3rem;
    &:active {
      background-size: 120%;
    }
  }
}
// tab
.tab-container {
  padding: 1rem 2rem;
  background: #fff;
  position: sticky;
  top: -1px;
  .swiper-slide {
    position: relative;
    padding: 3rem 0rem;
    width: 24%;
    color: #8e8787;
    text-align: center;
    &::after {
      content: "";
      display: inline-block;
      left: 0;
      top: 0;
      width: 100%;
      height: 0.4rem;
      background: #d71a1b;
      transition: all 0.35s;
      transform: scale(0);
    }
    &.is-active {
      color: #d71a1b;
    }
    &.is-active::after {
      transform: scale(1);
    }
  }
}
.tab-content {
  background: #f4f4f4;
}
</style>
