<template>
  <section :class="$style.main">
    <div :class="$style.btn">
      <button type="button" name="button" @click="goDetail">筛选条件 ></button>
    </div>
    <!-- <div :class="$style.goods" ref="scrollView">
      <div :class="[$style.item,good.select && $style.active]" :ref="good.id" v-for='good in goods'>
        <img :src="good.cover">
        <div :class="$style.msg">
          <b>￥ {{good.price}} </b>
          <span>{{good.name}}</span>
        </div>
        <div :class="$style.evaluate">
          <span><i class="star" v-for='star in good.star'></i> </span>
          <span>{{good.evaluateNum}}条评价</span>
        </div>
      </div>
    </div> -->
    <swiper :class="$style.goods" :options="swiperOption" ref="scrollView">
      <swiper-slide :class="$style.item" v-for='good in goods' :ref="good.id">
        <img :src="good.cover">
        <div :class="$style.msg">
          <b>￥{{good.price}} </b>
          <span>{{good.name}}</span>
        </div>
        <div :class="$style.evaluate">
          <span :class="$style.starGroup"><i class="star" v-for='star in good.star'></i> </span>
          <span>{{good.evaluateNum}}条评价</span>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import * as types from '~src/store/types'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'goods-View',
  data () {
    return {
      goods: [],
      swiperOption: {
        notNextTick: true,
        initialSlide: 0,
        debugger: true,
        spaceBetween: 5,
        slideActiveClass: 'slide-active',
        slidesOffsetAfter: window.innerWidth - (window.innerWidth > 340 ? 146 : 128),
        slidesPerView: 'auto',
        onTransitionStart: swiper => {
          this.$store.dispatch(types.UPDATE_MAP_SELECTED, this.goods[swiper.activeIndex].id)
        }
      }
    }
  },
  computed: {
    selectId () {
      return this.$store.state.map.selectId
    },
    swiper () {
      return this.$refs.scrollView.swiper
    }
  },
  watch: {
    selectId: {
      handler (val, oldVal) {
        if (val !== oldVal) {
          const actItem = this.goods.find(item => {
            return item.id === val
          })
          const index = this.goods.indexOf(actItem)
          this.swiper.slideTo(index)
        }
      }
    }
  },
  methods: {
    goDetail () {
      this.$refs.scrollView.swiper.translate = -280
    }
  },
  created () {
    this.$store.dispatch(types.CLOSE_LOADING)
    this.$store.commit(types.SET_MAP_STORES, [
      {
        id: 256,
        longitude: 113.270894,
        latitude: 23.139776,
        price: 220,
        name: '肌肉健身',
        cover: 'http://cdn01.dwfei.com/img/city/80LANKAWEI.png',
        star: 4,
        evaluateNum: 53
      },
      {
        id: 128,
        longitude: 113.257476,
        latitude: 23.142955,
        price: 530,
        name: '肥肉健身',
        cover: 'http://cdn01.dwfei.com/img/city/Singapore_01.png',
        star: 5,
        evaluateNum: 340
      },
      {
        id: 168,
        longitude: 113.248659,
        latitude: 23.124241,
        price: 520,
        name: '半肥瘦健身',
        cover: 'http://cdn01.dwfei.com/img/city/Singapore_01.png',
        star: 4,
        evaluateNum: 3450
      },
      {
        id: 1024,
        longitude: 113.275536,
        latitude: 23.127731,
        price: 5320,
        name: '瘦肉健身',
        cover: 'http://cdn01.dwfei.com/img/city/mangu_01.png',
        star: 3,
        evaluateNum: 5
      }
    ])
    this.goods = this.$store.state.map.stores
    this.$store.dispatch(types.UPDATE_MAP_SELECTED, this.goods[0].id)
  },
  components: { swiper, swiperSlide }
}
</script>
<style lang="stylus" scoped>
  .slide-active img
    border-color #32c47c
</style>
<style lang="stylus" module>
  .main
    position fixed
    bottom 0
    left 0
    right 0
    background #fff
    box-shadow 0 0 3px 2px rgba(0,0,0,.2)

  .btn
    position absolute
    background #00a8ff
    padding 10px 13px
    left 50%
    transform translateX(-50%)
    top -50px
    border-radius 100px
    button
      color #fff

  .goods
    height 140px
    padding 10px 5px

  .item
    color #9b9b9b
    font-size 15px
    width 136px !important
    @media screen and (max-width: 340px)
      font-size 13px
      width 118px !important
    &.active img
      border-color #32c47c
    img
      border-top 4px solid transparent
      width 99%

  .msg
    white-space nowrap
    >b
      color #000

  .evaluate
    display flex
    height 20px
    line-height 20px
    font-size .9em
    span
      white-space nowrap




</style>
