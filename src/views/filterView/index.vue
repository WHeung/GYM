<template>
  <section :class='$style.main'>
    <div :class="$style.modify">
      <div :class="$style.priceGroup">
        <h3>价格范围</h3>
        <span>{{priceRangeList[priceRange].rangeStr}}</span>
        <div :class="$style.progress">
          <input type="range" v-model="priceRange" :max="priceRangeList.length-1" min="0" step="1">
        </div>
        <div :class="$style.priceYears">
          <span>平均每月￥</span>&nbsp;&nbsp;<span>27000</span>
        </div>
      </div>
      <div :class="$style.kindGroup">
        <div :class="$style.fervent">
          星级 &nbsp;<span>{{level}}</span>
          <select v-model="level">
            <option :value="item" v-for="item in 5"></option>
          </select>
        </div>
        <div :class="$style.distance">
          距离 &nbsp;<span>{{distanceList[distance].distanceStr}}</span>
          <select v-model="distance">
            <option :value="index" :label="item.distanceStr" v-for="(item, index) in distanceList"></option>
          </select>
        </div>
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
      <button type="button" name="button" @click="handleSearch">搜索</button>
    </div>
  </section>
</template>

<script>
import * as types from '~src/store/types'

export default {
  data () {
    return {
      priceRangeList: [
        {
          id: 1,
          rangeStr: '￥150以下'
        }, {
          id: 2,
          rangeStr: '￥151 - ￥500'
        }, {
          id: 3,
          rangeStr: '￥501 - ￥1000'
        }, {
          id: 4,
          rangeStr: '￥1001 - ￥1500'
        }, {
          id: 5,
          rangeStr: '￥1501 - ￥2000'
        }, {
          id: 6,
          rangeStr: '￥2000以上'
        }
      ],
      priceRange: 0,
      level: 5,
      distanceList: [
        {
          id: 1,
          distanceStr: '1KM以内'
        }, {
          id: 2,
          distanceStr: '2KM以内'
        }, {
          id: 3,
          distanceStr: '5KM以内'
        }, {
          id: 4,
          distanceStr: '10KM以内'
        }
      ],
      distance: 0,
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
    },
    handleSearch () {
      this.$router.push({ name: 'goodsView' })
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
  .progress
    margin-top 10px
    display flex
    justify-content center
    input
      background rgba(0, 168, 255, .5)
      -webkit-appearance none
      width 65%
      border-radius 10px
      &::-webkit-slider-thumb
        -webkit-appearance none
      &::-webkit-slider-runnable-track
        height 8px
        border-radius 10px
        box-shadow 0 1px 1px #def3f8, inset 0 .08em .08em #0d1112
      &::-webkit-slider-thumb
        -webkit-appearance: none
        height 20px
        width 20px
        margin-top -5px
        background #ffffff
        border-radius 50%
        border solid 0.125em rgba(205, 224, 230, 0.5)
        box-shadow 0 .125em .125em #3b4547
      &:focus
        outline none

.kindGroup
  color #32c47c
  padding 10px 2px
  .fervent
    position relative
    span
      background #b7b7b7
      color #fff
      padding 0 10px
      border-radius 4px
    select
      position absolute
      top 0
      opacity 0
      width 100%
  .distance
    margin-top 20px
    position relative
    span
      color #b7b7b7
    select
      position absolute
      top 0
      opacity 0
      width 100%
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
