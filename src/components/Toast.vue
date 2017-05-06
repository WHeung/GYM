<template>
  <transition name="toast">
    <div :class="[$style.toastWrap, customClassName]" v-if="show">
      <div :class="$style.toast">{{ content }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'toast',
  computed: {
    content () {
      return this.$store.state.toast.content
    },
    customClassName () {
      const classNameMap = {
        'white-toast': this.$style.whiteToast
      }
      if (classNameMap[this.$store.state.toast.type]) {
        return classNameMap[this.$store.state.toast.type]
      } else {
        return ''
      }
    },
    show () {
      return this.$store.state.toast.show
    }
  }
}
</script>

<style lang="stylus" module>
.toastWrap
  position fixed
  z-index 1000
  width 100%
  left 0
  bottom 80px
  display flex
  justify-content center

.toast
  flex 0 0 auto
  font-size 13px
  background-color rgba(0, 0, 0, .8)
  border-radius 8px
  height 40px
  line-height 40px
  color #fff
  padding 0 25px
  white-space nowrap

.whiteToast
  .toast
    background-color rgba(0, 0, 0, .2)
</style>

<style lang="stylus">
.toast-enter-active
  transition all .3s ease

.toast-leave-active
  transition all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.toast-enter,
.toast-leave-active
  transform translateY(10px)
  opacity 0
</style>
