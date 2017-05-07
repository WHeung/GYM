<template>
  <section :class="$style.main">
    <div :class="$style.btn">
      <button type="button" name="button">筛选条件 ></button>
    </div>
    <div :class="$style.goods" ref="scrollView">
      <div :class="[$style.item,good.select && $style.active]" :ref="good.id" v-for='good in goods'>
        <img :src="good.cover">
        <div :class="$style.msg">
          <b>￥ {{good.price}} </b>
          <span>{{good.name}}</span>
        </div>
        <div :class="$style.evaluate">
          <span><i :class="$style.star" v-for='star in good.star'></i> </span>
          <span>{{good.evaluateNum}}条评价</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      goods: this.$store.state.map.stores
    }
  },
  props: ['selectId'],
  watch: {
    selectId: {
      handler (val, oldVal) {
        const goods = this.goods.map(item => {
          item.select = (item.id === val)
          return item
        })
        this.goods = [...goods]
        this.$refs.scrollView.scrollLeft = this.$refs[val][0].offsetLeft - 20
      },
      deep: true
    }
  }
}
</script>

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
    display flex
    overflow-x auto
    padding 20px
    &::-webkit-scrollbar
      display none

  .item
    flex 0 0 48%
    margin-right 10px
    color #9b9b9b
    &:last-child
      padding-right 20px
    &.active img
      border-color #32c47c
    width 40%
    img
      border-top 4px solid transparent
      width 100%

  .msg
    white-space nowrap
    >b
      color #000

  .evaluate
    white-space nowrap
    height 20px
    line-height 20px
    .star
      display inline-block
      width 15px
      height 15px
      background url(~src/public/star@2x.png) no-repeat
      background-size 100% 100%



</style>
