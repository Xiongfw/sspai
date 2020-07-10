<template>
  <div class="home-page">
    <!-- banner轮播图 -->
    <div class="swiper-container banner-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><a href="javascript:void(0)"><img src="~@/assets/imgs/swiper1.jpg"></a></div>
        <div class="swiper-slide"><a href="javascript:void(0)"><img src="~@/assets/imgs/swiper2.jpg"></a></div>
        <div class="swiper-slide"><a href="javascript:void(0)"><img src="~@/assets/imgs/swiper3.jpg"></a></div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev iconfont icon-left"></div>
      <div class="swiper-button-next iconfont icon-right"></div>
    </div>
    <!-- card 导航 -->
    <div class="swiper-container card-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide card-item"><a href="javascript:void(0)"><img src="~@/assets/imgs/card1.png"></a></div>
        <div class="swiper-slide card-item"><a href="javascript:void(0)"><img src="~@/assets/imgs/card2.png"></a></div>
        <div class="swiper-slide card-item"><a href="javascript:void(0)"><img src="~@/assets/imgs/card3.png"></a></div>
        <div class="swiper-slide card-item"><a href="javascript:void(0)"><img src="~@/assets/imgs/card4.png"></a></div>
      </div>
    </div>
    <!-- 选项卡 -->
    <div class="tabs-box" ref="tabsBox" :style="{'height': tabsHeight}">
      <div class="swiper-container tab-container" :class="{'is-fixed': tabsFixed}" ref="tabs">
        <ul class="swiper-wrapper">
          <li :class="['swiper-slide tab-item', {'is-active': tabIndex == 1}]" @click="tabIndex = 1">推荐</li>
          <li :class="['swiper-slide tab-item', {'is-active': tabIndex == 2}]" @click="tabIndex = 2">最热</li>
          <li :class="['swiper-slide tab-item', {'is-active': tabIndex == 3}]" @click="tabIndex = 3">应用推荐</li>
          <li :class="['swiper-slide tab-item', {'is-active': tabIndex == 4}]" @click="tabIndex = 4">生活方式</li>
          <li :class="['swiper-slide tab-item', {'is-active': tabIndex == 5}]" @click="tabIndex = 5">效率技巧</li>
          <li :class="['swiper-slide tab-item', {'is-active': tabIndex == 6}]" @click="tabIndex = 6">播客</li>
        </ul>
      </div>
    </div>
    <div class="tab-content">
      <div v-for="i in 100">{{i}}</div>
    </div>
    <!-- <i-footer></i-footer> -->
  </div>
</template>

<script>
import IFooter from "@/components/IFooter"
import Swiper from "swiper"
import { throttle } from "lodash"

export default {
  components: { IFooter },
  created() {},
  mounted() {
    this.initBannerSwiper()
    this.initCardSwiper()
    this.initTabSwiper()
    this.tabsHeight = this.$refs.tabs.getBoundingClientRect().height + 'px'
    document.addEventListener("scroll", throttle(this.handleScroll, 60))
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.handleScroll)
  },
  data() {
    return {
      // 当前选项卡
      tabIndex: 1,
      tabsFixed: false,
      // tabs导航
      tabsHeight: 0
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
        autoHeight: false
      })
    },
    /**
     * 初始化选项卡
     */
    initTabSwiper() {
      return new Swiper(".tab-container", {
        direction: "horizontal",
        slidesPerView: "auto"
      })
    },
    handleScroll(e) {
      const header = document.querySelector("#header")
      const tabsBox = this.$refs.tabsBox
      const headerHeight = header.getBoundingClientRect().height
      const offsetTop = tabsBox.getBoundingClientRect().top - headerHeight
      if (offsetTop <= 0) {
        this.tabsFixed = true
      } else {
        this.tabsFixed = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  user-select: none;
}
// banner轮播图
.banner-container {
  --swiper-pagination-color: #fd281a;
  height: 45rem;
  .swiper-slide {
    img {
      height: 100%;
    }
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
  // padding: 5rem 10rem;
  padding: 5rem 3rem;
  .swiper-wrapper {
  }
  .card-item {
    width: calc(100% / 2 - 1.5rem * 2);
    height: 22rem;
    box-shadow: 0 0.8rem 0.8rem 0 rgba(0, 0, 0, 0.15);
    margin: 0rem 1.5rem;
    overflow: hidden;
    border-radius: 1.6rem;
    transform: rotate(0deg);
    img {
      width: 100%;
      transition: transform 0.5s;
    }
    img:hover {
      transform: scale(1.1);
    }
  }
}
// tab
.tab-container {
  padding: 0rem 3rem;
  .swiper-wrapper {
    font-size: 1.1em;
    font-weight: 500;
  }
  &.is-fixed {
    position: fixed;
    left: 0;
    top: $header-height;
    width: 100%;
    background: #fff;
  }
  .tab-item {
    position: relative;
    width: auto;
    color: #8e8787;
    text-align: center;
    border-bottom: 0.6rem solid transparent;
    transition: all 0.5s;
    line-height: 12rem;
    padding: 0 3rem;
    margin-right: 2rem;
    &.is-active {
      color: #d71a1b;
      border-bottom: 0.6rem solid #d71a1b;
    }
  }
}
</style>
