<template>
  <div :class="$style.main">
    <div :class="$style.item">
      <img src="http://cdn01.dwfei.com/img/city/80LANKAWEI.png">
      <div :class="$style.msg">
        <b>￥ 221 </b>
        <span>独立房间</span>
      </div>
      <div :class="$style.evaluate">
        <span><i :class="$style.star"></i><i :class="$style.star"></i><i :class="$style.star"></i><i :class="$style.star"></i><i :class="$style.star"></i> </span>
        <span>33条评价</span>
      </div>
    </div>
    <div :class="$style.item">
      <img src="http://cdn01.dwfei.com/img/city/80LANKAWEI.png">
      <div :class="$style.msg">
        <b>￥ 221 </b>
        <span>独立房间</span>
      </div>
      <div :class="$style.evaluate">
        <span><i :class="$style.star"></i><i :class="$style.star"></i><i :class="$style.star"></i><i :class="$style.star"></i><i :class="$style.star"></i> </span>
        <span>33条评价</span>
      </div>
    </div>
    <div :class="$style.item">
      <img src="http://cdn01.dwfei.com/img/city/80LANKAWEI.png">
      <div :class="$style.msg">
        <b>￥ 221 </b>
        <span>独立房间</span>
      </div>
      <div :class="$style.evaluate">
        <span><i :class="$style.star"></i><i :class="$style.star"></i><i :class="$style.star"></i><i :class="$style.star"></i><i :class="$style.star"></i> </span>
        <span>33条评价</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" module>
  .main
    position fixed
    bottom 0
    left 0
    right 0
    height 140px
    background #fff
    padding 20px
    box-shadow 0 0 3px 2px rgba(0,0,0,.2)
    overflow-x auto
    display flex
    &::-webkit-scrollbar
      display none

  .item
    flex 0 0 48%
    margin-right 10px
    color #9b9b9b
    border-top 4px solid transparent
    &:last-child
      padding-right 20px
    &.active
      border-color #32c47c
    width 40%
    img
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
