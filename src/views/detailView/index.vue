<template>
  <section :class='$style.main'>
    <transition name="infotranslate">
    <div :class="$style.info" v-show="showInfo">
      <div :class="$style.base" v-if="detail.intr">
        <h4>俱乐部介绍</h4>
        <p>{{limitIntr}}<span @click="toggleIntr" v-if="!switchIntr">阅读更多</span></p>
        <span @click="toggleIntr" v-if="switchIntr">收起更多</span>
      </div>
      <div :class="$style.concat">
        <div>
          <span :class="$style.concatTitle">地址 :</span>
          <span>{{detail.addr}}</span>
        </div>
        <div>
          <span :class="$style.concatTitle">联系电话 :</span>
          <span>{{detail.phone}}</span>
        </div>
        <div>
          <span :class="$style.concatTitle">在线顾问 :</span>
          <span>{{detail.asker}}</span>
        </div>
      </div>
      <div :class="$style.teacher" v-if="detail.coach && detail.coach.length">
        <div :class="$style.teacherTitle">认证教练</div>
        <div :class="$style.teacherList">
          <div :class="$style.item" v-for="coach in coaches">
            <img :src="coach">
          </div>
        </div>
      </div>
    </div>
    </transition>
    <div :class="$style.evaluate">
      <div :class="$style.evaluateLeft">
        <p :class="$style.price">
          ￥ {{detail.priceYears}} 每年
        </p>
        <p :class="$style.level">
          <span v-if="detail.level"><i class="star" v-for="level in detail.level"></i> </span>
          <span v-if="detail.evaluateNum">{{detail.evaluateNum}}条评价</span>
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
  data () {
    return {
      showInfo: false,
      switchIntr: false
    }
  },
  computed: {
    detail () {
      return this.$store.state.detail.data
    },
    coaches () {
      const coachList = this.$store.state.detail.data.coach
      if (coachList && coachList.length) {
        return coachList.length % 3 === 2 ? [...coachList, ''] : [...coachList]
      } else {
        return []
      }
    },
    limitIntr () {
      if (this.$store.state.detail.data.intr) {
        return this.switchIntr ? this.$store.state.detail.data.intr : this.$store.state.detail.data.intr.slice(0, 30) + '......'
      } else {
        return ''
      }
    }
  },
  created () {
    this.$store.dispatch(types.UPDATE_DETAIL_DATA, 5).then(() => {
      this.$store.dispatch(types.CLOSE_LOADING)
      this.showInfo = true
    })
  },
  methods: {
    toggleIntr () {
      this.switchIntr = !this.switchIntr
    }
  }
}
</script>

<style lang="stylus">
.infotranslate-enter-active
  opacity 1
  transform translateY(0)

.infotranslate-enter-active
  transition all .8s ease

.infotranslate-enter
  opacity 0
  transform translateY(-100%)
</style>
<style lang="stylus" module>
  .main
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background rgba(0,0,0,.2)

  .info
    background #eeeef0
    padding 10px 20px
    font-size 14px
    max-height 70%
    overflow-y auto
    overflow-x hidden
    &::-webkit-scrollbar
      display none

  .base
    margin-bottom 20px
    h4
      margin 0
      font-weight 500
      line-height 30px
      font-size 1.1em
    span
      color #32c47c

  .concat
    border-top 4px solid #b5b5b5
    padding 20px 4px
    >div
      display flex
      line-height 1.3em
      .concatTitle
        flex-basis 22%
        white-space nowrap

  .teacher
    border-top 4px solid #b5b5b5
    padding 0 4px
    .teacherTitle
      color #32c47c
      margin 10px 0
    .teacherList
      display flex
      flex-wrap wrap
      justify-content space-between
      .item
        margin-bottom 10px
        flex-basis 30%
        border-radius 50%
        overflow hidden
        img
          width 100%
          display block



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

    .evaluateLeft
      .price
        font-family simHei
    .evaluateRight
      height 20px
      text-align center
      padding 10px 13px
      border-radius 100px
      background #00a8ff
      button
        color #fff



</style>
