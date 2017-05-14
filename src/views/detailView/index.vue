<template>
  <section :class='$style.main'>
    <transition name="infotranslate">
    <div :class="$style.info" v-show="showInfo">
      <div :class="$style.base">
        <h4>俱乐部介绍</h4>
        <p>威尔士，始于1996年，健身会所十大品牌，以提供个性化服务啊打开机房环境爱的色放很快就啊电视剧啊世界发达时间不见啊舒服的吧暗示大家看法哈大家发空间佛挡杀佛点卡</p>
      </div>
      <div :class="$style.concat">
        <div>
          <span :class="$style.concatTitle">地址 :</span>
          <span>广州市海珠路8好号</span>
        </div>
        <div>
          <span :class="$style.concatTitle">联系电话 :</span>
          <span>020-420 042 3344 024</span>
        </div>
        <div>
          <span :class="$style.concatTitle">在线顾问 :</span>
          <span>jojo</span>
        </div>
      </div>
      <div :class="$style.teacher">
        <div :class="$style.teacherTitle">认证教练</div>
        <div :class="$style.teacherList">
          <div :class="$style.item">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2281807318,4086469053&fm=23&gp=0.jpg">
          </div>
          <div :class="$style.item">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2281807318,4086469053&fm=23&gp=0.jpg">
          </div>
          <div :class="$style.item">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2281807318,4086469053&fm=23&gp=0.jpg">
          </div>
          <div :class="$style.item">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2281807318,4086469053&fm=23&gp=0.jpg">
          </div>
          <div :class="$style.item">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2281807318,4086469053&fm=23&gp=0.jpg">
          </div>
          <div :class="$style.item">
            <img src="">
          </div>
        </div>
      </div>
    </div>
    </transition>
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
  data () {
    return {
      showInfo: false
    }
  },
  created () {
    this.$store.dispatch(types.CLOSE_LOADING)
  },
  mounted () {
    this.showInfo = true
  },
  methods: {
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

  .base
    margin-bottom 20px
    h4
      margin 0
      font-weight 500
      line-height 30px
      font-size 1.1em
    /*p*/

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
