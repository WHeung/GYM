<template>
  <section :class="$style.main">
    <div :class="$style.btn">
      <button type="button" name="button">筛选条件 ></button>
    </div>
    <swiper :class="$style.goods" :options="swiperOption" ref="scrollView">
      <swiper-slide :class="$style.item" v-for='good in goods' :ref="good.id" @click="goDetail(good.id)">
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
        },
        onTap: swiper => {
          this.$router.push({ path: '/detail/' + this.goods[swiper.activeIndex].id })
        }
      }
    }
  },
  computed: {
    goods () {
      return this.$store.state.map.stores
    },
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
  },
  created () {
    this.$store.dispatch(types.CLOSE_LOADING)
    this.$store.dispatch(types.UPDATE_MAP_STORES, {})
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
