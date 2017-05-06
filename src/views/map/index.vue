<template>
  <main>
    <BMap></BMap>
  </main>
</template>

<script>
import * as types from '~src/store/types'
import BMap from '~src/components/BMap.vue'

export default {
  components: { BMap },
  created () {
    this.$store.dispatch(types.CLOSE_LOADING)
  }
}

// 百度地图API功能
</script>

<style lang="stylus">
</style>
