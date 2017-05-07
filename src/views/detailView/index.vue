<template>
  <section :class='$style.main'>
    <div class="">

    </div>
    <div :class="$style.evaluate">
      <div :class="$style.evaluateLeft">
        <p :class="$style.price">
          ￥ 2500 每年
        </p>
        <p :class="$style.level">
          <span><i class="star"></i> </span>
          <span>33条评价</span>
        </p>
      </div>
      <div :class="$style.evaluateRight">
        <button type="button" name="button">查看详情 ></button>
      </div>
    </div>
  </section>
</template>

<script>
import * as types from '~src/store/types'

export default {
  created () {
    this.$store.dispatch(types.CLOSE_LOADING)
  }
}
</script>

<style lang="stylus" module>
  .main
    position fixed
    top 0
    left 0
    right 0
    bottom 0


  .evaluate
    position absolute
    bottom 0
    width 100%
    height 70px
    padding 0 20px
    box-sizing border-box
    background #fff
    display flex
    justify-content space-between
    align-items center

  /*.evaluateLeft*/
    .evaluateRight
      height 20px
      text-align center
      padding 10px 13px
      border-radius 100px
      background #00a8ff
      button
        color #fff



</style>
