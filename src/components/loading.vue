<template>
  <div :class="$style.loading" v-show="show">
    <svg viewBox="25 25 50 50" :class="$style.circular">
      <circle cx="50" cy="50" r="20" fill="none" :class="$style.path"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'loading',
  computed: {
    show () {
      return this.$store.state.loading
    }
  }
}
</script>

<style lang="stylus" module>
.loading
  top 50%
  margin-top -21px
  width 100%
  text-align center
  position fixed
  z-index 100

.circular
  width 42px
  height 42px
  animation loading-rotate 2s linear infinite

.path
  animation loading-dash 1.5s ease-in-out infinite
  stroke-dasharray 90,150
  stroke-dashoffset 0
  stroke-width 2
  stroke #32c47c
  stroke-linecap round

@keyframes loading-dash
  0%
    stroke-dasharray 1,200
    stroke-dashoffset 0
  50%
    stroke-dasharray 90,150
    stroke-dashoffset -40px
  to
    stroke-dasharray 90,150
    stroke-dashoffset -120px

@keyframes loading-rotate
  to
    transform rotate(1turn)
</style>
