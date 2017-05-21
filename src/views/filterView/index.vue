<template>
  <section :class='$style.main'>
    <div :class="$style.modify">
      <div :class="$style.priceGroup">
        <h3>价格范围</h3>
        <span>￥35 - ￥150</span>
        <div :class="$style.progress">

        </div>
        <div :class="$style.priceYears">
          <span>平均每月￥</span>&nbsp;&nbsp;<span>27000</span>
        </div>
      </div>
      <div :class="$style.kindGroup">
        <div :class="$style.fervent">星级 &nbsp;<span>7</span></div>
        <div :class="$style.distance">距离 &nbsp;<span>2KM</span></div>
        <div :class="$style.basicType">
          健身项目
          <div :class="$style.basic">
            <div :class="[$style.one,{[$style.active]:activeList[0]}]" @click="selectGymType(0)"></div>
            <div :class="[$style.two,{[$style.active]:activeList[1]}]" @click="selectGymType(1)"></div>
            <div :class="[$style.three,{[$style.active]:activeList[2]}]" @click="selectGymType(2)"></div>
            <div :class="[$style.four,{[$style.active]:activeList[3]}]" @click="selectGymType(3)"></div>
          </div>
          <div :class="$style.basic">
            <div :class="[$style.five,{[$style.active]:activeList[4]}]" @click="selectGymType(4)"></div>
            <div :class="[$style.six,{[$style.active]:activeList[5]}]" @click="selectGymType(5)"></div>
            <div :class="[$style.seven,{[$style.active]:activeList[6]}]" @click="selectGymType(6)"></div>
            <div :class="[$style.eight,{[$style.active]:activeList[7]}]" @click="selectGymType(7)"></div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.btnGroup">
      <button type="button" name="button">搜索</button>
    </div>
  </section>
</template>

<script>
import * as types from '~src/store/types'

export default {
  data () {
    return {
      currentIndex: []
    }
  },
  created () {
    this.$store.dispatch(types.CLOSE_LOADING)
  },
  computed: {
    activeList () {
      const arr = new Array(8).fill(false)
      this.currentIndex.forEach(item => {
        arr[item] = true
      })
      return arr
    }
  },
  methods: {
    checkActive (index) {
    },
    selectGymType (index) {
      for (var i = 0; i < this.currentIndex.length; i++) {
        if (this.currentIndex[i] === index) {
          this.currentIndex.splice(i, 1)
          return
        }
      }
      if (i === this.currentIndex.length) {
        this.currentIndex.push(index)
      }
    }
  }
}
</script>

<style lang="stylus" module>
.main
  background #eeeef0
  position fixed
  left 0
  right 0
  bottom 0
  top 0
  padding-bottom 70px

.modify
  padding 0 30px

.priceGroup
  border-bottom 4px solid #ccc
  .priceYears
    text-align center
    margin 10px 0
    span:first-child
      color #32c47c

.kindGroup
  color #32c47c
  padding 10px 2px
  .fervent
    span
      background #b7b7b7
      color #fff
      padding 0 10px
      border-radius 4px
  .distance
    margin-top 20px
    span
      color #b7b7b7
  .basicType
    margin-top 20px
    .basic
      padding 10px 10px 0 10px
      display flex
      justify-content space-between
      >div
        flex-basis 23%
        height 50px
        background #f7f7f7 url('~src/public/177d128fad8a27c91feac89d4d9ce0cb.png') no-repeat
        background-size 250%
        &.one
          background-position 12px 4px
        &.two
          background-position -113px 4px
        &.three
          background-position 12px -60px
        &.four
          background-position -50px -60px
        &.five
          background-position -113px -60px
        &.six
          background-position 12px -118px
        &.seven
          background-position -46px -115px
        &.eight
          background-position -113px -115px
        &.active
          background-color #abf

.btnGroup
  position absolute
  bottom 0
  width 100%
  height 70px
  background #fff
  display flex
  justify-content center
  align-items center
  button
    padding 10px 25px
    text-align center
    border-radius 100px
    background #00a8ff
    color #fff
</style>
